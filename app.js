const image = document.querySelectorAll("img");
const openModal = document.querySelector(".openModal");
const imgDesc = document.querySelectorAll(".photo");

image.forEach(function (imgText) {
    imgText.addEventListener("click", function () {
        if (imgText.classList.contains("selectedPhoto")) {
            openModal.style.display = "block";
            openModal.innerHTML = `
                <div class="close">&times;</div>
                <img src= ${this.src} class="modalPic">
                <div class="desc">${this.alt}</div>
            `;
        };
        const closeModal = document.querySelector(".close");
        if(closeModal.addEventListener("click",function(){
            openModal.style.display = "none";
        }));
    });
});

