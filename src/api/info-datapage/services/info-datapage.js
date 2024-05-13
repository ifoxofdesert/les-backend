'use strict';

/**
 * info-datapage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::info-datapage.info-datapage', ({ strapi }) => ({
  async getInfoPage({ filters, populate }) {
    try {
      let pages = await strapi.entityService.findMany('api::info-datapage.info-datapage', {
        filters: filters ? JSON.parse(filters) : undefined,
        populate,
      });

      const page = pages[0] || {};

      if (page?.slug) {
        return {
          slug: page?.slug,
          pagetitle: page?.meta?.pagetitle,
          pageDescription: page?.meta?.pageDescription,
          title: page?.title,
          lastUpdate: page?.lastUpdate,
          text: page?.text,
        };
      } else {
        return {};
      }
    } catch (err) {
      return err;
    }
  },
}));
