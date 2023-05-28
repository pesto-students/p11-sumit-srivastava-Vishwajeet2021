let timerId = null; // Variable to store the timer ID

function startAnimation() {
    if (timerId !== null) {
        clearInterval(timerId); // Stop the timer if it is running
    }

    timerId = setInterval(() => {
        moveImage(clickX, clickY); // Call moveImage every 10 milliseconds
    }, 10);
}

function moveImage(clickX, clickY) {
    const img = document.querySelector('img');
    const imgX = parseInt(img.style.left);
    const imgY = parseInt(img.style.top);

    const centerX = clickX - img.width / 2;
    const centerY = clickY - img.height / 2;

    if (imgX === centerX && imgY === centerY) {
        clearInterval(timerId); // Stop the timer if the heart reaches the destination
        timerId = null; // Reset the timer ID
    } else {
        if (imgX < centerX) {
            img.style.left = imgX + 1 + 'px'; // Move 1 pixel to the right
        } else if (imgX > centerX) {
            img.style.left = imgX - 1 + 'px'; // Move 1 pixel to the left
        }

        if (imgY < centerY) {
            img.style.top = imgY + 1 + 'px'; // Move 1 pixel down
        } else if (imgY > centerY) {
            img.style.top = imgY - 1 + 'px'; // Move 1 pixel up
        }
    }
}

document.addEventListener('click', (event) => {
    startAnimation();
    const clickX = event.clientX;
    const clickY = event.clientY;
});
