module.exports = {
  apps: [
    {
      name: 'lesBack',
      script: './server.js',
      cwd: '/home/site/les-backend/',
      args: 'start',
      instances: 3,
      exec_mode: 'cluster',
      max_memory_restart: '900M',
    },
  ],
};
