'use strict';

/**
 * general service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::general.general', ({ strapi }) => ({
  getImage(data) {
    if (data) {
      if (data?.formats && data.width > 1920) {
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

  async getGeneral() {
    try {
      let general = await strapi.entityService.findMany('api::general.general', {
        populate: 'deep',
      });

      let contact = await strapi.entityService.findMany('api::contact.contact', {
        populate: 'deep',
      });

      let payment = await strapi.entityService.findMany('api::payment.payment', {
        populate: 'deep',
      });

      let footer = await strapi.entityService.findMany('api::footer.footer', {
        populate: 'deep',
      });

      let header = await strapi.entityService.findMany('api::header.header', {
        populate: 'deep',
      });

      return {
        address: contact?.contactInfo?.address,
        policyUrl: general?.policyUrl,
        footer: {
          phones: footer?.phones?.map((item) => {
            return {
              text: item?.text,
              url: item?.url,
              mission: item?.mission,
            };
          }),
          menu: footer?.menu?.map((item) => {
            return {
              text: item?.text,
              url: item?.url,
            };
          }),
          navigation: footer?.navigation?.map((item) => {
            return {
              text: item?.text,
              url: item?.url,
            };
          }),
          socials: footer?.socials?.map((item) => {
            return {
              text: item?.text,
              url: item?.url,
            };
          }),
          payments: payment.map((item) => {
            return {
              src: this.getImage(item?.image),
              alt: item?.image?.alternativeText,
              url: item?.url,
            };
          }),
        },
        header: {
          phone: {
            text: header?.phone?.text,
            url: header?.phone?.url,
            mission: item?.mission,
          },
          menu: header?.menu?.map((item) => {
            return {
              text: item?.text,
              url: item?.url,
            };
          }),
          socials: header?.socials?.map((item) => {
            return {
              text: item?.text,
              url: item?.url,
            };
          }),
          logo: {
            src: this.getImage(header?.logo),
            alt: header?.logo?.alternativeText,
          },
        },
      };
    } catch (err) {
      return err;
    }
  },
}));
