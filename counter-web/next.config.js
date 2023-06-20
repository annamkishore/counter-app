/** @type {import('next').NextConfig} */

let getUrl = () => {
    console.log("next.config.js 1 ", process.env.NEXT_PUBLIC_COUNTER_SERVICE_URL)
    console.log("next.config.js 2 ", process.env.COUNTER_SERVICE_URL)
    return process.env.NEXT_PUBLIC_COUNTER_SERVICE_URL
}

const nextConfig = {
    env: {
        COUNTER_SERVICE_URL: getUrl()
    }
}

module.exports = nextConfig
