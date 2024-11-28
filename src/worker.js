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

    // If no route is found, return a 404
    if (!route) {
      const status = 404;
      const body = { status, message: 'Unknown service' };
      return new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Main routing logic
    if (route.type === 'web') {
      return new Response(redirectTemplate(route.message, route.redirectUrl, route.status), {
        headers: { 'Content-Type': 'text/html' },
        status: 200
      });
    } else if (route.type === 'api') {
      const status = route.status || 410;
      const body = { status, message: route.message };
      return new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Catch-all for invalid route configuration
    const status = 400;
    const body = { status, message: 'Invalid route configuration' };
    return new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
