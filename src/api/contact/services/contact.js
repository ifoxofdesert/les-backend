'use strict';

/**
 * contact service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contact.contact', ({ strapi }) => ({
  async getContact() {
    try {
      let contact = await strapi.entityService.findMany('api::contact.contact', {
        populate: 'deep',
      });

      if (contact?.general?.pagetitle) {
        return {
          pagetitle: contact?.general?.pagetitle,
          pageDescription: contact?.general?.pageDescription,
          title: contact?.general?.title,
          lastUpdate: contact?.general?.lastUpdate,
          reservations: {
            phones: contact?.contactInfo?.reservation?.phones?.map((item) => ({
              text: item?.text,
              url: item?.url,
            })),
            emails: contact?.contactInfo?.reservation?.mails?.map((item) => item?.mail),
          },
          banquets: {
            phones: contact?.contactInfo?.banquet?.phones?.map((item) => ({
              text: item?.text,
              url: item?.url,
            })),
            emails: contact?.contactInfo?.banquet?.mails?.map((item) => item?.mail),
          },
          address: contact?.contactInfo?.address,
          llcName: contact?.contactInfo?.llcName,
          ogrn: contact?.contactInfo?.ogrn,
          inn: contact?.contactInfo?.inn,
          kpp: contact?.contactInfo?.kpp,
          legalAddress: contact?.contactInfo?.legalAddress,
        };
      } else {
        return {};
      }
    } catch (err) {
      return err;
    }
  },
}));
