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
          slideItem: data?.pageNews?.slideItem?.map((slide) => ({
            date: slide?.PreviewCard?.date,
            position: slide?.PreviewCard?.position,
            description: slide?.PreviewCard?.description,
            type: slide?.pageNews?.type,
            title: slide?.title,
            slug: slide?.slug,
            image: {
              src: getImage(slide?.PreviewCard?.image),
              alt: slide?.PreviewCard?.image?.alternativeText,
            },
          })),
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
      const filterData = filters ? JSON.parse(filters) : undefined;

      let entries = await strapi.entityService.findPage('api::new.new', {
        pageSize,
        page,
        sort,
        populate,
        filters: filterData,
      });

      let tagsFilter = undefined;

      if (filterData?.$and?.pageNews?.type?.tag || filterData?.pageNews?.type?.tag) {
        tagsFilter = {
          pageNews: {
            type: { tag: { $eq: filterData?.$and?.pageNews?.type?.tag?.$eq || filterData?.pageNews?.type?.tag?.$eq } },
          },
        };
      }

      let allNews = await strapi.entityService.findMany('api::new.new', {
        sort,
        populate: {
          PreviewCard: true,
        },
        filters: tagsFilter,
      });

      const getImage = strapi.service('api::general.general').getImage;

      if (entries?.results?.length) {
        return {
          dateEvents: allNews.map((item) => item?.PreviewCard?.date),
          result: entries?.results?.map((item) => {
            return {
              title: item.title,
              slug: item.slug,
              type: item.pageNews.type,
              image: {
                src: getImage(item?.PreviewCard?.image),
                alt: item?.PreviewCard?.image?.alternativeText,
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
