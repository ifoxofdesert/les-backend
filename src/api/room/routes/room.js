'use strict';

/**
 * room router
 */
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/getPreviewsRoom',
      handler: 'room.getPreviewsRoom',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
