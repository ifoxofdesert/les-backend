module.exports = {
  apps: [
    {
      name: 'lesBack',
      script: 'yarn',
      cwd: '/home/site/les-backend/',
      args: 'start',
      instances: 3,
      exec_mode: 'cluster',
      max_memory_restart: '900M',
    },
  ],
};
