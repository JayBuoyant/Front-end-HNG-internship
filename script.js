function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    utcTimeElement.textContent = `Current UTC Time: ${now.toUTCString()}`;
}

// Update time on page load
updateUTCTime();

// Refresh UTC time every second
setInterval(updateUTCTime, 1000);
