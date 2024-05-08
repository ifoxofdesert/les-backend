'use strict';

/**
 * new router
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/getNewsPage',
      handler: 'new.getPage',
      config: {
        policies: [],
        middlewares: [],
      },
    },

    {
      method: 'GET',
      path: '/getPreviews',
      handler: 'new.getPreviews',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
