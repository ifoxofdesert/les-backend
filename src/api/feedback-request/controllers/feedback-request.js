'use strict';

/**
 * feedback-request controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::feedback-request.feedback-request', ({ strapi }) => ({
  async sendFeedbackRequests(ctx, next) {
    try {
      const data = await strapi
        .service('api::feedback-request.feedback-request')
        .sendFeedbackRequests(ctx?.request?.body);

      ctx.body = data;
    } catch (err) {
      console.log(err);
      ctx.badRequest('error');
    }
  },
}));
