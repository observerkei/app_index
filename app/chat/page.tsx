"use client";

export default function Example() {
	var refreshUrl = `https://${process.env.CHAT_HOSTNAME}.observerkei.top`;

	return (
		<meta http-equiv="Refresh" content={"0; URL=" + refreshUrl} />
	);
}
