"use client";

export default function BlogPost({ params }: { params: { id: string[] } }) {
	console.log(params);

	var refreshUrl = "https://chat1.observerkei.top";

	for (let i = 0; params.id && i < params.id.length; ++i) {
		refreshUrl += '/' + params.id[i];
	}

	return (
		<meta http-equiv="Refresh" content={"0; URL=" + refreshUrl} />
	);
}