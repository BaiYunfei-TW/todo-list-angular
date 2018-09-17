const colors = require('colors');

const PROXY_CONFIG_MAP = {
  local: {
    '/api': {
      target: 'http://localhost:8080',
      secure: false,
      // pathRewrite: {
      //   '^/api': ''
      // },
      changeOrigin: true
    }
  }
};

const envName = process.env['PROXY_ENV'] || 'local';
const PROXY_CONFIG = PROXY_CONFIG_MAP[envName.toLowerCase()] || PROXY_CONFIG_MAP['local'];

console.log();
console.log(colors.bold.green('现在代理的是 ' + envName + ' 环境'));
console.log(colors.bold.green('[api] ' + PROXY_CONFIG['/api'].target));
console.log();

module.exports = PROXY_CONFIG;
