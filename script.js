const gallery = document.querySelector(".gallery");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click", () => {
    gallery.scrollBy({ left: -310, behavior: "smooth" });
});

next.addEventListener("click", () => {
    gallery.scrollBy({ left: 310, behavior: "smooth" });
});
