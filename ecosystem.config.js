module.exports = {
  apps: [
    {
      name: 'Next.js-Config',
      script: 'npm start',
      instances: 1,
      merge_logs: true,
      ignore_watch: ['logs', 'public', '.vscode'],
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],
};
