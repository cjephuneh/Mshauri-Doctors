/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.pexels.com'],
    },
    eslint: {
        dirs: ['src'],
    },
};

export default nextConfig;
