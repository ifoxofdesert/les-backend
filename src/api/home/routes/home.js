'use strict';

/**
 * home router
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/getHome',
      handler: 'home.getHome',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
