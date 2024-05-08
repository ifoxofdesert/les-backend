'use strict';

/**
 * new controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::new.new', ({ strapi }) => ({
  async getPage(ctx, next) {
    try {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      const data = await strapi.service('api::new.new').getPage(sanitizedQueryParams);

      ctx.body = data;
    } catch (err) {
      console.log(err);
      ctx.badRequest('error');
    }
  },

  async getPreviews(ctx, next) {
    try {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      const data = await strapi.service('api::new.new').getPreviews(sanitizedQueryParams);

      ctx.body = data;
    } catch (err) {
      console.log(err);
      ctx.badRequest('error');
    }
  },
}));
