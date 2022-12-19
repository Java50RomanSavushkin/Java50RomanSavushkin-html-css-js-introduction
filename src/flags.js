const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const detailsContainer = document.querySelector(".details-container");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const mainElement = document.querySelector(".main-class")
const hideButtonElement = document.getElementById("hide-button");
const HIDDEN = "hidden";
const IS_POINT = "is-point";
const audio = document.getElementById("myAudio");

function showDetails() {
    mainElement.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function () {
        detailsContainer.classList.remove(IS_POINT);
    })
}

function hideDetails() {
    mainElement.classList.add(HIDDEN)
    audio.pause();
    // audio.currentTime = 0;
}

function setDetails(anchor) {
    const dataImage = anchor.getAttribute("data-details-image");
    const dataAudio = anchor.getAttribute("data-details-audio");
    detailsImage.src = dataImage;
    showDetails();
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
    audio.src = dataAudio
}

for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("click", function () {
        setDetails(anchorElements[i]);
    })
}

hideButtonElement.addEventListener("click", hideDetails);

