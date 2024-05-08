'use strict';

/**
 * news-filter router
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/getTags',
      handler: 'news-filter.getTags',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
