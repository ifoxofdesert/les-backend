'use strict';

/**
 * contact router
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/getContact',
      handler: 'contact.getContact',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
