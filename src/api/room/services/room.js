'use strict';

/**
 * room service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::room.room', ({ strapi }) => ({
  async getPreviewsRoom({ start, sort, filters, limit, populate }) {
    try {
      let rooms = await strapi.entityService.findMany('api::room.room', {
        start,
        limit,
        sort,
        populate,
        filters,
      });

      const getImage = strapi.service('api::general.general').getImage;

      if (rooms?.length) {
        return rooms?.map((room) => {
          return {
            title: room?.title,
            area: room?.pageRoom?.area,
            persons: room?.pageRoom?.persons,
            img: {
              src: getImage(room?.preview?.img),
              alt: room?.preview?.img?.alternativeText,
            },
            description: room?.preview?.description,
            slug: room?.slug,
          };
        });
      } else {
        return [];
      }
    } catch (err) {
      return err;
    }
  },
}));
