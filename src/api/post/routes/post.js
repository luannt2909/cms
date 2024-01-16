'use strict';

/**
 * post router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;
const defaultRouter = createCoreRouter("api::post.post");

// function to add to or override default router methods
const customRouter = (innerRouter, routeOverride = [], extraRoutes = []) => {
  let routes;

  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes;

      const newRoutes = routes.map((route) => {
        let found = false;

        routeOverride.forEach((override) => {
          if (
            route.handler === override.handler &&
            route.method === override.method
          ) {
            found = override;
          }
        });

        return found || route;
      });

      return newRoutes.concat(extraRoutes);
    },
  };
};

// Overide the default router with the custom router to use slug.
const myOverrideRoutes = [
  {
    method: "GET",
    path: "/posts/:slug",
    handler: "api::post.post.findOne",
  },
];

const myExtraRoutes = [
  {
    method: "GET",
    path: "/posts/:id/tracking",
    handler: "api::post.post.trackingView",
    config: {
      auth: false,
    },
  },
];

module.exports = customRouter(defaultRouter, myOverrideRoutes, myExtraRoutes);

// module.exports = createCoreRouter('api::post.post');
