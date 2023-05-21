/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        const backendUrl = process.env.BACKEND_URL;
        if (!backendUrl) {
            throw new Error("BACKEND_URL is not set");
        }

        return [
            {
                source: "/api/:path*",
                destination: `${backendUrl}/api/:path*`,
            },
        ];
    },
};

module.exports = nextConfig;
