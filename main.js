const events = function (e) {

    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const red = x / width * 100;
    const green = y / height * 100;
    const blue = ((x / width * 100) + (y / height * 100)) / 2;

    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
};

document.body.addEventListener("mousemove", events);

const addTime = (start = 0) => {
    let number = start;
    return () => {
        number++;
        document.querySelector('div').textContent = `You have been visting this page since: ${number} seconds`;
    }
}

const timer = addTime();
let intervals = setInterval(timer, 1000);