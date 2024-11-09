const purgecss = require('@fullhuman/postcss-purgecss');

const purgecssConfig = purgecss({
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './public/index.html',
  ],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  safelist: ['dynamic-class-name', /^btn-/], // Specify classes to keep
});

module.exports = {
  style: {
    postcss: {
      plugins: [
        ...(process.env.NODE_ENV === 'production' ? [purgecssConfig] : []),
      ],
    },
  },
};