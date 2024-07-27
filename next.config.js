/** @type {import("next").NextConfig} */

const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  pwa: {
    dest: 'public',
    register: true,
    skipWaitings: true,
    runtimeCaching,
    disabled: process.env.NODE_ENV === 'development',
    sw: 'sw.js',
  },
  publicRuntimeConfig: {
    site: {
      name: 'Training Tracker',
      // autres configurations si nécessaire
    },
  },
})

const nextConfig = {
  reactStrictMode: true,
  react: {
    useSuspense: true,
  },
  swcMinify: true,
}

module.exports = [nextConfig, withPWA]
