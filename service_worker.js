console.info("worker deployed.");

chrome.tabs.query({}, (tabs) => {
	const tenDaysInMiliSeconds = 864_000_000; // 10 * 24 * 60 * 60 * 1000

	for (const tab of tabs) {
		const lastActivity = new Date(tab.lastActivityTime);
		const now = new Date();
		const timeSinceLastActivity = now.getTime() - lastActivity.getTime();

		if (timeSinceLastActivity > tenDaysInMiliSeconds) {
			chrome.tabs.remove(tab.id);
		}
	}
});

chrome.alarms.create("closeOldTabs", { periodInMinutes: 60 });

