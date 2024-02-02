"use client";

export const CHAT_HOSTNAME = 'chat1';

export default function Example() {
	var refreshUrl = `https://${CHAT_HOSTNAME}.observerkei.top`;

	return (
		<meta http-equiv="Refresh" content={"0; URL=" + refreshUrl} />
	);
}
