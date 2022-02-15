const header = document.querySelector("hea4");
const h1 = document.querySelector('h1')
let image = true;
let title = true;

const changeImage = () => {
    image = !image;
    title = !title;
    header.style.backgroundImage = image ? "url(balony.jpg" : "url(bee.jpg)";
    h1.textContent = title ? "Balon" : "Pszczoła"
}

header.addEventListener("click", changeImage)