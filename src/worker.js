import { config } from './config';
import { redirectTemplate } from './template';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const host = url.hostname;
    const path = url.pathname;

    // Find the best matching route
    const route = config.routes
      .sort((a, b) => b.path.length - a.path.length)
      .find(r => (r.host === host || r.host === '*') && path.startsWith(r.path));

    // If no route, return 404
    if (!route) {
      const status = 404;
      const body = { status, message: 'Unknown service' };
      return new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Respond to browsers
    const acceptHeader = request.headers.get('Accept') || '';
    const isBrowserRequest = acceptHeader.includes('text/html');

    if (route.type === 'web' && isBrowserRequest) {
      return new Response(redirectTemplate(route.message, route.redirectUrl, route.status), {
        status: 200,
        headers: { 'Content-Type': 'text/html' }
      });
    }

    // Respond to api
    const status = route.status || 410;
    const body = { status, message: route.message };
    return new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json' }
    });
  }
}
