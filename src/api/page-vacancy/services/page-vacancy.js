'use strict';

/**
 * page-vacancy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::page-vacancy.page-vacancy', ({ strapi }) => ({
  async getVacancyPage() {
    try {
      let vacancy = await strapi.entityService.findMany('api::page-vacancy.page-vacancy', {
        populate: 'deep',
      });

      let vacancies = await strapi.service('api::vacancy.vacancy').getVacancies({
        populate: 'deep',
      });

      if (vacancy?.meta?.pagetitle) {
        return {
          pagetitle: vacancy?.meta?.pagetitle,
          pageDescription: vacancy?.meta?.pageDescription,
          title: vacancy?.meta?.title,
          lastUpdate: vacancy?.meta?.lastUpdate,
          vacancies: vacancies,
        };
      } else {
        return {};
      }
    } catch (err) {
      return err;
    }
  },
}));
