'use strict';

/**
 * info-datapage router
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/getInfoPage',
      handler: 'info-datapage.getInfoPage',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
