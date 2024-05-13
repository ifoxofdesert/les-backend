'use strict';

/**
 * info-datapage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::info-datapage.info-datapage', ({ strapi }) => ({
  async getInfoPage(ctx, next) {
    try {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);
      const data = await strapi.service('api::info-datapage.info-datapage').getInfoPage(sanitizedQueryParams);

      ctx.body = data;
    } catch (err) {
      console.log(err);
      ctx.badRequest('error');
    }
  },
}));
