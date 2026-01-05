/* IMAGE LISTS (ADD ALL IMAGES HERE) */
const eventImages = [
    "images/gallery/event/A11.jpeg",
    "images/gallery/event/A12.JPG",
    "images/gallery/event/A13.JPG",
    "images/gallery/event/A14.JPG",
    "images/gallery/event/A15.JPG",
    "images/gallery/event/A15A.JPG",
    "images/gallery/event/A17.JPG",
];

const stallImages = [
    "images/gallery/stall/2.JPG",
    "images/gallery/stall/2_1.JPG",
    "images/gallery/stall/2_2.JPG",
    "images/gallery/stall/6.JPG",
    "images/gallery/stall/math 3.JPG",
    "images/gallery/stall/phy 2.jpeg",
];

let eventIndex = 0;
let stallIndex = 0;

const eventImg = document.getElementById("eventImage");
const stallImg = document.getElementById("stallImage");

eventImg.src = eventImages[0];
stallImg.src = stallImages[0];

function fadeChange(imgElement, images, indexRef) {
    imgElement.classList.add("fade-out");

    setTimeout(() => {
        indexRef.value = (indexRef.value + 1) % images.length;
        imgElement.src = images[indexRef.value];
        imgElement.classList.remove("fade-out");
    }, 800); // must match CSS transition
}

/* Wrap index so it can be updated by reference */
const eventRef = { value: 0 };
const stallRef = { value: 0 };

setInterval(() => {
    fadeChange(eventImg, eventImages, eventRef);
}, 2000);

setInterval(() => {
    fadeChange(stallImg, stallImages, stallRef);
}, 2000);