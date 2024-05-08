'use strict';

/**
 * new controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page-news.page-news', ({ strapi }) => ({
  async getNewsListingPage(ctx, next) {
    try {
      const data = await strapi.service('api::page-news.page-news').getNewsListingPage();

      ctx.body = data;
    } catch (err) {
      console.log(err);
      ctx.badRequest('error');
    }
  },
}));
