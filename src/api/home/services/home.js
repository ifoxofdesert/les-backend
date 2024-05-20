'use strict';

/**
 * home service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home.home', ({ strapi }) => ({
  async getHome() {
    try {
      let home = await strapi.entityService.findMany('api::home.home', {
        populate: 'deep',
      });

      const getImage = strapi.service('api::general.general').getImage;
      const getVideo = strapi.service('api::general.general').getVideo;

      const getOffersSlides = await strapi.service('api::general.general').getOffersSlides();

      if (home?.meta?.pagetitle) {
        return {
          pagetitle: home?.meta?.pagetitle,
          pageDescription: home?.meta?.pageDescription,
          mainBlock: {
            mainTitle: {
              first: home?.mainBlock?.mainTitle?.first,
              second: home?.mainBlock?.mainTitle?.second,
            },
            mainImage: {
              src: getImage(home?.mainBlock?.mainImage),
              alt: home?.mainBlock?.mainImage?.alternativeText,
            },
            coordinate: {
              latitude: home?.mainBlock?.coordinate?.latitude,
              longitude: home?.mainBlock?.coordinate?.longitude,
            },
          },
          offersSlider: {
            slideTitle: home?.offersSlider?.slideTitle,
            slideSecondTitle: home?.offersSlider?.slideSecondTitle,
            slideDescription: home?.offersSlider?.slideDescription,
            slids: getOffersSlides,
          },
          video: {
            poster: getImage(home?.video?.poster),
            sources: getVideo(home?.video?.video),
          },
          questions: {
            title: home?.questions?.title,
            secondTitle: home?.questions?.secondTitle,
            thirdTitle: home?.questions?.thirdTitle,
            accordion: home?.questions?.accordion?.map((item) => {
              return {
                title: item?.title,
                text: item?.text,
                active: item?.active,
              };
            }),
          },
          roomsListBlock: {
            title: home?.roomsListBlock?.title,
            description: home?.roomsListBlock?.description,
          },
          reviewSlider: {
            title: home?.reviewSlider?.title,
            description: home?.reviewSlider?.description,
            slides: home?.reviewSlider?.slides?.map((item) => ({
              text: item?.text,
              name: item?.name,
              stars: item?.stars,
            })),
          },
          afishaEvents: {
            titleCustom: {
              first: home?.afishaEventsBlock?.titleCustom?.first,
              second: home?.afishaEventsBlock?.titleCustom?.second,
            },
            description: home?.afishaEventsBlock?.description,
          },
        };
      } else {
        return {};
      }
    } catch (err) {
      return err;
    }
  },
}));
