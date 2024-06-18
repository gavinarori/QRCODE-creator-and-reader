/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = {
    serverComponentsExternalPackages: ['@prisma/client', 'bcrypt']
};

export default withPWA(nextConfig);