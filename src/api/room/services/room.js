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
        sort: sort || undefined,
        populate,
        filters: filters ? JSON.parse(filters) : undefined,
      });

      const getImage = strapi.service('api::general.general').getImage;

      if (rooms?.length) {
        return rooms?.map((room) => ({
          title: room?.preview?.shortName,
          area: room?.pageRoom?.area,
          persons: room?.pageRoom?.persons,
          img: {
            src: getImage(room?.preview?.img),
            alt: room?.preview?.img?.alternativeText,
          },
          description: room?.preview?.description,
          slug: room?.slug,
        }));
      } else {
        return [];
      }
    } catch (err) {
      return err;
    }
  },

  async getPage({ start, sort, filters, limit, populate }) {
    try {
      let rooms = await strapi.entityService.findMany('api::room.room', {
        start,
        limit,
        sort,
        populate,
        filters: filters ? JSON.parse(filters) : undefined,
      });

      const room = rooms[0] || {};

      const getImage = strapi.service('api::general.general').getImage;
      const getVideo = strapi.service('api::general.general').getVideo;

      const getOffersSlides = await strapi.service('api::general.general').getOffersSlides();

      if (room?.slug) {
        return {
          title: room?.title,
          slug: room?.slug,
          pagetitle: room?.meta?.pagetitle,
          pageDescription: room?.meta?.pageDescription,
          description: room?.pageRoom?.description,
          area: room?.pageRoom?.area,
          persons: room?.pageRoom?.persons,
          viewRoom: room?.pageRoom?.viewRoom,
          img: {
            src: getImage(room?.pageRoom?.img),
            alt: room?.pageRoom?.img?.alternativeText,
          },
          travelId: room?.pageRoom?.travelId,
          video: {
            poster: getImage(room?.pageRoom?.video?.poster),
            sources: getVideo(room?.pageRoom?.video?.video),
          },
          aboutRoom: {
            title: room?.pageRoom?.aboutRoom?.title,
            firstText: room?.pageRoom?.aboutRoom?.firstText,
            secondText: room?.pageRoom?.aboutRoom?.secondText,
          },
          accorionTitle: {
            first: room?.pageRoom?.accorionTitle?.first,
            second: room?.pageRoom?.accorionTitle?.second,
          },
          accorionDescription: room?.pageRoom?.accorionDescription,
          accordion: room?.pageRoom?.accordion?.map((item) => ({
            title: item?.title,
            text: item?.text,
            active: item?.active,
          })),
          gallaryTitle: room?.pageRoom?.gallaryTitle,
          gallaryDescription: room?.pageRoom?.gallaryDescription,
          gallary: room?.pageRoom?.gallary?.map((item) => ({
            src: getImage(item),
            alt: item?.alternativeText,
          })),
          roomWelcome: {
            title: room?.pageRoom?.roomWelcome?.title,
            secondTitle: room?.pageRoom?.roomWelcome?.secondTitle,
            initialLetter: room?.pageRoom?.roomWelcome?.initialLetter,
            text: room?.pageRoom?.roomWelcome?.text,
            markText: room?.pageRoom?.roomWelcome?.markText,
            subText: room?.pageRoom?.roomWelcome?.subText,
          },
          offersSlider: {
            slideTitle: room?.pageRoom?.offersSlider?.slideTitle,
            slideSecondTitle: room?.pageRoom?.offersSlider?.slideSecondTitle,
            slideDescription: room?.pageRoom?.offersSlider?.slideDescription,
            slids: getOffersSlides,
          },
          roomListTitle: {
            first: room?.pageRoom?.roomListTitle?.first,
            second: room?.pageRoom?.roomListTitle?.second,
          },
          roomListDescription: room?.pageRoom?.roomListDescription,
          roomList: room?.pageRoom?.roomList?.map((room) => {
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
          }),
        };
      } else {
        return {};
      }
    } catch (err) {
      return err;
    }
  },
}));
