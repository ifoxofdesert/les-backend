module.exports = ({ env }) => ({
  upload: {
    config: {
      breakpoints: {
        default: 1920,
        1400: 1400,
      },
    },
  },

  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env('SMTP_PORT', 465),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('DEFAULT_FROM'),
        defaultReplyTo: env('DEFAULT_REPLAY_TO'),
      },
    },
  },
});
