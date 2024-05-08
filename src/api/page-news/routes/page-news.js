'use strict';

/**
 * page-news router
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/getNewsListingPage',
      handler: 'page-news.getNewsListingPage',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
