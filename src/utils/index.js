export function timeSince(date) {
	const seconds = Math.floor((new Date() - date) / 1000);

	let interval = seconds / 31536000;

	if (interval > 1) {
		return Math.floor(interval) + ' years';
	}
	interval = seconds / 2592000;
	if (interval > 1) {
		return Math.floor(interval) + ' months';
	}
	interval = seconds / 86400;
	if (interval > 1) {
		return Math.floor(interval) + ' days';
	}
	interval = seconds / 3600;
	if (interval > 1) {
		return Math.floor(interval) + ' hours';
	}
	interval = seconds / 60;
	if (interval > 1) {
		return Math.floor(interval) + ' minutes';
	}
	return Math.floor(seconds) + ' seconds';
}
export function urlify(text) {
	var urlRegex = /(https?:\/\/[^\s]+)/g;
	return text?.replace(urlRegex, function (url) {
		return `<a target="_blank" style="text-decoration: underline;" href=" ${url} " >${new URL(url).host}${new URL(url).pathname} </a>`;
	});
}

export function isOnlyWhiteSpace(text) {
	return text.trim() === '';
}
