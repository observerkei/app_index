"use client";
import BLOG_HOSTNAME from '../page';

export default function BlogPost({ params }: { params: { id: string[] } }) {

	var refreshUrl = `https://${BLOG_HOSTNAME}.observerkei.top`;

	for (let i = 0; params.id && i < params.id.length; ++i) {
		refreshUrl += '/' + params.id[i];
	}

	return (
		<meta http-equiv="Refresh" content={"0; URL=" + refreshUrl} />
	);
}