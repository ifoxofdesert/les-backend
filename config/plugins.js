module.exports = ({ env }) => ({
  upload: {
    config: {
      breakpoints: {
        default: 1920,
      },
    },
  },

  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env('SMTP_PORT', 465),
        secure: false,
        ignoreTLS: false,
        tls: { rejectUnauthorized: true },
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
