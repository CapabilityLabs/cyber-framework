/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    serverExternalPackages: ['pino', 'thread-stream'],
    experimental: {
    },
}

module.exports = nextConfig