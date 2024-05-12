'use strict';

/**
 * vacancy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vacancy.vacancy', ({ strapi }) => ({
  async getVacancies({ start, sort, filters, limit, populate }) {
    try {
      let vacancies = await strapi.entityService.findMany('api::vacancy.vacancy', {
        start,
        limit,
        sort,
        populate,
        filters: filters ? JSON.parse(filters) : undefined,
      });

      if (vacancies?.length) {
        return vacancies?.map((item) => ({
          title: item?.title,
          experience: item?.experience,
          employment: item?.employment,
          salary: item?.salary,
          responsibilities: item?.responsibilities?.map((data) => data?.text),
          conditions: item?.conditions?.map((data) => data?.text),
        }));
      } else {
        return {};
      }
    } catch (err) {
      return err;
    }
  },
}));
