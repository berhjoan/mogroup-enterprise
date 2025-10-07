const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'app/components');
    config.resolve.alias['@'] = path.join(__dirname, 'app');
    return config;
  },
};
module.exports = nextConfig;
