"use strict";

const bar = document.querySelector(".bar");
let h = document.documentElement.scrollHeight;

window.addEventListener("scroll", () => {
    console.clear();
    let percent = this.scrollY / (h - innerHeight) * 100;
    console.log(percent);
    console.log(this.scrollY);

    bar.style.width = `${(innerWidth / 100) * percent}px`;
});