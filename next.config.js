/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['undici', 'firebase'],
};

module.exports = nextConfig;
