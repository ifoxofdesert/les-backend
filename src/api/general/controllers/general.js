'use strict';

/**
 * home controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::general.general', ({ strapi }) => ({
  async getGeneral(ctx, next) {
    try {
      const data = await strapi.service('api::general.general').getGeneral();

      ctx.body = data;
    } catch (err) {
      console.log(err);
      ctx.badRequest('error');
    }
  },
}));
