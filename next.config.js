/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["robohash.org", "localhost", "smfu-simple-multer-file-upload.herokuapp.com"]
  }
}

module.exports = nextConfig
