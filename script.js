

function updateClock() {
  const now = new Date();

  const dateOptions = { month: 'short', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit' };

  const date = now.toLocaleDateString('en-US', dateOptions);
  const time = now.toLocaleTimeString('en-US', timeOptions);

  const formatted = `${date} - ★ - ${time}`;

  document.getElementById('datetime').textContent = formatted;
}

updateClock();
setInterval(updateClock, 10000);
