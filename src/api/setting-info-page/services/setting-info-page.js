'use strict';

/**
 * setting-info-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::setting-info-page.setting-info-page', ({ strapi }) => ({
  async getMenu() {
    try {
      let settings = await strapi.entityService.findMany('api::setting-info-page.setting-info-page', {
        populate: {
          menu: 'deep',
        },
      });

      if (settings?.menu?.length) {
        return settings?.menu?.map((item) => ({
          title: item?.text,
          url: item?.url,
        }));
      } else {
        return [];
      }
    } catch (err) {
      return err;
    }
  },
}));
