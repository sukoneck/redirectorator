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
      path: "/api/v2",
      type: "api",
      message: "This API has also been decommissioned. Please use the new API at https://new-api.example.com",
      status: 410
    },
    {
      host: "test.sukoneck.com",
      path: "/",
      type: "web",
      message: "This service has moved to a new location",
      redirectUrl: "https://example.com/test",
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
      redirectUrl: "https://example.com/test2",
      status: 301
    },
    {
      host: "test.complacent.fyi",
      path: "/api/v1",
      type: "api",
      message: "Second API has been decommissioned",
      status: 410
    },
    {
      host: "test.complacent.fyi",
      path: "/",
      type: "web",
      message: "This service has moved to a new location",
      redirectUrl: "https://example.com/complacent",
      status: 301
    }
  ]
};
