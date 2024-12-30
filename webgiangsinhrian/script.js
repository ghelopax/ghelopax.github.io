function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

const tuyet = document.querySelector(".tuyet_roi");

for (let i = 0; i < 50; i++) {
    const tuyet_var = document.createElement("div");
    tuyet_var.classList.add("tuyet");

    const size = getRandom(10, 25);
    tuyet_var.style.width = `${size}px`;
    tuyet_var.style.height = `${size}px`;
    tuyet_var.style.left = `${getRandom(0, 100)}vw`; 
    tuyet_var.style.animationDuration = `${getRandom(5, 10)}s`;
    tuyet_var.style.animationDelay = `${getRandom(0, 5)}s`;

    tuyet.appendChild(tuyet_var);
}
