'use strict';

/**
 * room controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::room.room', ({ strapi }) => ({
  async getPreviewsRoom(ctx, next) {
    try {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      const data = await strapi.service('api::room.room').getPreviewsRoom(sanitizedQueryParams);

      ctx.body = data;
    } catch (err) {
      console.log(err);
      ctx.badRequest('error');
    }
  },
}));
