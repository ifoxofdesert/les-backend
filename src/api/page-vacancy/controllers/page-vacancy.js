'use strict';

/**
 * page-vacancy controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page-vacancy.page-vacancy', ({ strapi }) => ({
  async getVacancyPage(ctx, next) {
    try {
      const data = await strapi.service('api::page-vacancy.page-vacancy').getVacancyPage();

      ctx.body = data;
    } catch (err) {
      console.log(err);
      ctx.badRequest('error');
    }
  },
}));
