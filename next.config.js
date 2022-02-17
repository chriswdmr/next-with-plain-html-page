/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/legacy-page',
          destination: '/legacy-page/index.html',
        },
      ],
    }
  },
}
