import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	output: "export",
	env: {
		BLOG_HOSTNAME: process.env.BLOG_HOSTNAME,
		CHAT_HOSTNAME: process.env.CHAT_HOSTNAME,
	},
};

export default withContentlayer(nextConfig);
