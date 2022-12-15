const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const mainElement = document.querySelector(".main-class")
const HIDDEN = "hidden";
function showDitails() {
    mainElement.classList.remove(HIDDEN);
}
function hideDetails() {
    mainElement.classList.add(HIDDEN)
}
function setDetails(anchor) {
    detailsImage.src = anchor.getAttribute("data-details-image");
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
    showDitails();
}
for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("click", function () {
        setDetails(anchorElements[i]);
    })
}
hideButtonElement.addEventListener("click", hideDetails);
