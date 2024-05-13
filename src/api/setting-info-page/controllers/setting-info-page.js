'use strict';

/**
 * setting-info-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::setting-info-page.setting-info-page', ({ strapi }) => ({
  async getMenu(ctx, next) {
    try {
      const data = await strapi.service('api::setting-info-page.setting-info-page').getMenu();

      ctx.body = data;
    } catch (err) {
      console.log(err);
      ctx.badRequest('error');
    }
  },
}));
