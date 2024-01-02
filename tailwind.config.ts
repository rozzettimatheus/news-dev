import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      borderRadius: {
        'link-indicator': '3px 3px 0 0'
      },
      height: {
        hero: 'calc(100vh - 5rem)'
      }
    }
  },
  plugins: []
}
export default config
