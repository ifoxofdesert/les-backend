'use strict';

/**
 * general service
 */

module.exports = {
  getImage(data) {
    if (data) {
      if (data.width > 1920) {
        return data.formats.default.url;
      } else {
        return data.url;
      }
    } else {
      return {};
    }
  },

  getVideo(data) {
    if (data) {
      return [
        {
          src: data?.url,
          type: data?.mime,
        },
      ];
    } else {
      return [];
    }
  },

  async getOffersSlides() {
    const getStocks = await strapi.service('api::new.new').getPreviews({
      populate: 'deep',
      filters: JSON.stringify({ pageNews: { type: { tag: { $eq: 'stock' } } } }),
    });

    if (getStocks?.result?.length) {
      return getStocks?.result?.map((stock) => {
        return {
          title: stock.title,
          slug: stock.slug,
          img: stock?.image,
          markText: stock?.offerTitle,
          expired: false,
        };
      });
    } else {
      return [];
    }
  },
};
