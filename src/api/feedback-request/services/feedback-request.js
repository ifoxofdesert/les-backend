'use strict';

/**
 * feedback-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::feedback-request.feedback-request', ({ strapi }) => ({
  async sendFeedbackRequests({ name, phone, email, description }) {
    try {
      await strapi.entityService.create('api::feedback-request.feedback-request', {
        data: {
          name,
          phone,
          email,
          description,
        },
      });

      const data = await strapi.entityService.findMany('api::feedback-request-setting.feedback-request-setting', {
        populate: {
          emails: true,
        },
      });

      const emails = data?.emails.map((email) => email.mail) || [];
      if (emails.length) {
        const test = await strapi.plugins['email'].services.email.send({
          to: emails.join(','),
          subject: 'Новая заявка с сайта',
          html: `
            <h1>Новая заявка с сайта</h1><br><br>
            <b>Имя:</b> ${name || 'Имя не указали'}<br>
            <b>Телефон:</b> ${phone || 'Номер телефона не указали'}<br>
            <b>Почта:</b> ${email || 'Почту не указали'}<br>
            <b>Комментарий:</b> ${description || 'Комментарий не оставили'}<br>
            `,
        });

        console.log(test);
      }

      return {
        status: 'successfully',
      };
    } catch (err) {
      if (err?.details?.errors) {
        return {
          status: 'notSend',
          errors: err?.details?.errors,
        };
      } else {
        return {
          status: 'notSend',
          errors: {},
        };
      }
    }
  },
}));
