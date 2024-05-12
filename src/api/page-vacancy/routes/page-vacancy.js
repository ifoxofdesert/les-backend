'use strict';

/**
 * page-vacancy router
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/getVacancyPage',
      handler: 'page-vacancy.getVacancyPage',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
