'use strict';

/**
 * home router
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/getGeneral',
      handler: 'general.getGeneral',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
