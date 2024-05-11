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
    {
      method: 'GET',
      path: '/getRoomPage',
      handler: 'room.getPage',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
