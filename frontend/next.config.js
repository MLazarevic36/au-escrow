/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	generateEtags: false,
	swcMinify: true,
	env: {
		ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
		DEFAULT_CHAIN: process.env.DEFAULT_CHAIN,
	},
}

module.exports = nextConfig
