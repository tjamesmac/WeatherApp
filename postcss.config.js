module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext'),
    require('cssnano'),
    // require('autoprefixer'),
    require('precss'),
  ],
};
