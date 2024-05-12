'use strict';

/**
 * new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new.new', ({ strapi }) => ({
  async getPage({ filters, limit, populate }) {
    try {
      let entries = await strapi.entityService.findMany('api::new.new', {
        filters: filters ? JSON.parse(filters) : undefined,
        limit,
        populate,
      });

      const data = entries[0] || {};

      const getImage = strapi.service('api::general.general').getImage;

      if (data?.id) {
        return {
          id: data.id,
          title: data.title,
          slug: data.slug,
          type: {
            name: data.pageNews.type?.name,
            tag: data.pageNews.type?.tag,
          },
          pagetitle: data?.meta?.pagetitle || undefined,
          pageDescription: data?.meta?.pageDescription || undefined,
          image: {
            src: getImage(data.pageNews.image),
            alt: data.pageNews.image?.alternativeText,
          },
          markText: data.pageNews.markText,
          introText: data.pageNews.introText,
          textBefore: data.pageNews.textBefore,
          slideTitle: data.pageNews.slideTitle,
          slideText: data.pageNews.slideText,
          buttonAfterActive: data.pageNews.buttonAfterActive,
          buttonBeforeActive: data.pageNews.buttonBeforeActive,
          slideItem: data?.pageNews?.slideItem?.map((slide) => slide?.pageNews?.image || {}),
        };
      } else {
        return {};
      }
    } catch (err) {
      return err;
    }
  },
  async getPreviews({ page, pageSize, sort, populate, filters }) {
    try {
      let entries = await strapi.entityService.findPage('api::new.new', {
        pageSize,
        page,
        sort,
        populate,
        filters: filters ? JSON.parse(filters) : undefined,
      });

      const getImage = strapi.service('api::general.general').getImage;

      if (entries?.results?.length) {
        return {
          result: entries?.results?.map((item) => {
            return {
              title: item.title,
              slug: item.slug,
              type: item.pageNews.type,
              image: {
                src: getImage(item?.pageNews?.image),
                alt: item?.pageNews?.image?.alternativeText,
              },
              date: item.PreviewCard.date,
              position: item.PreviewCard.position,
              description: item.PreviewCard.description,
            };
          }),
          pagination: entries?.pagination,
        };
      } else {
        return [];
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  },
}));
