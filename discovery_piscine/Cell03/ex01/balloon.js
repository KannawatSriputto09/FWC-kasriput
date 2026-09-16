const balloon = document.getElementById('balloon');

const MIN_SIZE = 200;
const MAX_SIZE = 420;
const STEP = 10;
const SHRINK_STEP = 5;

const colors = ['red', 'green', 'blue'];
let colorIndex = 0;
let size = MIN_SIZE;

function changeBalloon() {
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
}

balloon.addEventListener('click', () => {
    size += STEP;
    colorIndex = (colorIndex + 1) % colors.length;

    if (size > MAX_SIZE) {
        size = MIN_SIZE;
        colorIndex = 0;
        changeBalloon();
        return;
    }

    changeBalloon
    ();
});

balloon.addEventListener('mouseleave', () => {
    size = Math.max(MIN_SIZE, size - SHRINK_STEP);
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    changeBalloon
    ();
});
