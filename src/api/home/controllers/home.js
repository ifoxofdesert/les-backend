'use strict';

/**
 * home controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::home.home', ({ strapi }) => ({
  async getHome(ctx, next) {
    try {
      const data = await strapi.service('api::home.home').getHome();

      ctx.body = data;
    } catch (err) {
      console.log(err);
      ctx.badRequest('error');
    }
  },
}));
