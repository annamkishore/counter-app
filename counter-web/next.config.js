/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        COUNTER_SERVICE_URL: process.env.NEXT_PUBLIC_COUNTER_SERVICE_URL
    }
}

module.exports = nextConfig
