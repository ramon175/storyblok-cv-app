/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    STORYBLOK_ACCESS_TOKEN: process.env.STORYBLOK_ACCESS_TOKEN,
    STORYBLOK_OAUTH_TOKEN: process.env.STORYBLOK_OAUTH_TOKEN
  }
}

module.exports = nextConfig
