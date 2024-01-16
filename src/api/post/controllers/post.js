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

  async trackingView(ctx) {
    const { id } = ctx.params;
    const post = await strapi.entityService.findOne("api::post.post", id, {fields: ['id', 'title', 'view_count']});
    const viewCount = post.viewCount || 0
    const now = Date.now()
    const params = { data: {viewCount: viewCount + 1, lastViewedAt:  now}}
    const entry = await strapi.entityService.update("api::post.post", id, params);
    return this.transformResponse({id: id, viewCount: viewCount, lastViewedAt: now});
  },
}));
