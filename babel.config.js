const presets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      corejs: 3,
    },
  ],
  '@babel/preset-typescript',
  '@babel/preset-react',
];

module.exports = {
  presets,
};
