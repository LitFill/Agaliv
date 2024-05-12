document.addEventListener("DOMContentLoaded", () => {
	console.log("Agalic popup here!");
});

document.getElementById('calculateBtn').addEventListener('click', () => {
	chrome.tabs.query({}, (tabs) => {
		const tenDaysInMilliseconds = 10 * 24 * 60 * 60 * 1000; // Convert 10 days to milliseconds

		for (const tab of tabs) {
			const lastActivityTime = tab.lastActivityTime; // Get lastActivityTime
			const now = Date.now();

			if (now - lastActivityTime > tenDaysInMilliseconds) {
				chrome.tabs.remove(tab.id);
			}
		}
	});
});

