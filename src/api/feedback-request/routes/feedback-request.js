'use strict';

/**
 * feedback-request router
 */

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/send-feedback-requests',
      handler: 'feedback-request.sendFeedbackRequests',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
