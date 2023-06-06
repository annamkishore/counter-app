/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        COUNTER_SERVICE_URL: process.env.COUNTER_SERVICE_URL
    }
}

module.exports = nextConfig
