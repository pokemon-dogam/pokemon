// const plugin = require('tailwindcss/plugin')
// const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{ts,vue}', './*.html'],
  // theme: {
  //   extend: {
  //     // here's how to extend fonts if needed
  //     fontFamily: {
  //       sans: [...defaultTheme.fontFamily.sans],
  //     },
  //   },
  // },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require("daisyui"),
    // plugin(function ({ addVariant, e, postcss }) {
    //   addVariant('firefox', ({ container, separator }) => {
    //     const isFirefoxRule = postcss.atRule({
    //       name: '-moz-document',
    //       params: 'url-prefix()',
    //     })
    //     isFirefoxRule.append(container.nodes)
    //     container.append(isFirefoxRule)
    //     isFirefoxRule.walkRules((rule) => {
    //       rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`
    //     })
    //   })
    // }),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: 'cupcake'
  },
}
