'use strict';

/**
 * news-filter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-filter.news-filter', ({ strapi }) => ({
  async getTags() {
    let tags = await strapi.entityService.findMany('api::news-filter.news-filter', {
      populate: 'deep',
    });

    if (tags.length) {
      return tags.map((tag) => {
        return {
          name: tag?.name,
          tag: tag?.tag,
        };
      });
    }
  },
}));
