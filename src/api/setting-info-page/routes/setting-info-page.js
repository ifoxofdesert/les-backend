'use strict';

/**
 * setting-info-page router
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/settingInfoPage-getMenu',
      handler: 'setting-info-page.getMenu',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
