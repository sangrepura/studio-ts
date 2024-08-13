/** @type {import('prettier').Options} */
module.exports = {
  singleQuote: true,
  semi: false,
  tailwindConfig: './tailwind.config.ts',
  tailwindFunctions: ['clsx'],
  plugins: ['prettier-plugin-tailwindcss'],
}
