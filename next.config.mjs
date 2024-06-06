/** @type {import('next').NextConfig} */
const nextConfig = {
    serverComponentsExternalPackages: ['@prisma/client', 'bcrypt']
};

export default nextConfig;
