function countdownTimer() {
    const targetDate = new Date("April 20, 2024").getTime();
    const currentDate = new Date().getTime();
    const remainingTime = targetDate - currentDate;
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

countdownTimer();
setInterval(countdownTimer, 1000);
