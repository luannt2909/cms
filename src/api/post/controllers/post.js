'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::post.post');
module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const posts = await strapi.entityService.findMany("api::post.post", query);

    // const sanitizedEntity = await this.sanitizeOutput(posts);

    return this.transformResponse(posts[0]);
  },
}));
