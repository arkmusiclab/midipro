const gallery = document.querySelector(".gallery");
const images = document.querySelectorAll(".gallery img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;
const totalImages = images.length;
const imageWidth = 310; // 이미지 폭 + 여백

function updateGallery() {
    gallery.style.transform = `translateX(${-index * imageWidth}px)`;

    images.forEach((img, i) => {
        img.classList.toggle("center", i === index);
    });
}

// 화살표 클릭 이벤트
prev.addEventListener("click", () => {
    index = (index - 1 + totalImages) % totalImages;
    updateGallery();
});

next.addEventListener("click", () => {
    index = (index + 1) % totalImages;
    updateGallery();
});

// 자동 슬라이드 기능 (5초마다 이동)
setInterval(() => {
    index = (index + 1) % totalImages;
    updateGallery();
}, 5000);

// 초기 갤러리 상태 업데이트
updateGallery();
