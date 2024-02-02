"use client";

export const BLOG_HOSTNAME = 'blog';

export default function Example() {
	var refreshUrl = "https://blog.observerkei.top";

	return (
		<meta http-equiv="Refresh" content={"0; URL=" + refreshUrl} />
	);
}
