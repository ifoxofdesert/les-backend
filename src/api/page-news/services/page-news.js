'use strict';

/**
 * page-news service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::page-news.page-news', ({ strapi }) => ({
  async getNewsListingPage() {
    let page = await strapi.entityService.findMany('api::page-news.page-news', {
      populate: 'deep',
    });

    if (page?.id) {
      return {
        title: page?.title,
        description: page?.description,
        pagetitle: page?.meta?.pagetitle,
        pageDescription: page?.meta?.pageDescription,
        defaultFilter: page?.defaultFilter?.tag,
      };
    }
  },
}));
