const custom = require('../webpack/common.js');

module.exports = {
  stories: ['./stories/**/*.stories.tsx'],
  webpackFinal: (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules}, resolve: custom.resolve };
  },
};