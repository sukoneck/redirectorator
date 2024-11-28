export const config = {
  routes: [
    {
      host: "test.sukoneck.com",
      path: "/api/v1",
      type: "api",
      message: "This API has been decommissioned. Please use the new API at https://new-api.example.com",
      status: 410
    },
    {
      host: "test.sukoneck.com",
      path: "/",
      type: "web",
      message: "This service has moved to a new location",
      redirectUrl: "https://sukoneck.com",
      status: 301
    },
    {
      host: "test2.sukoneck.com",
      path: "/api/v1",
      type: "api",
      message: "Second API has been decommissioned",
      status: 410
    },
    {
      host: "test2.sukoneck.com",
      path: "/",
      type: "web",
      message: "This service has moved to a new location",
      redirectUrl: "https://sukoneck.com",
      status: 301
    }
  ]
};
