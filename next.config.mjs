/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'indojayaputra.com',
                port: '',
                pathname: '**',
            },
        ],
    },
};


export default nextConfig;
