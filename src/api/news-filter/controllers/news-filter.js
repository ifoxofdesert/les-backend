'use strict';

/**
 * news-filter controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::news-filter.news-filter', ({ strapi }) => ({
  async getTags(ctx, next) {
    try {
      const data = await strapi.service('api::news-filter.news-filter').getTags();

      ctx.body = data;
    } catch (err) {
      console.log(err);
      ctx.badRequest('error');
    }
  },
}));
