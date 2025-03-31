let currentIndex = 0;
let images = document.querySelectorAll(".imagegallery img");
let captions = Array.from(images).map((img) => img.alt);

let autoSlide;

function openLightbox(img, index) {
  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("caption").textContent = captions[index];

  document.getElementById("lightbox").classList.add("show");
  currentIndex = index;
  startSlideshow();
}
console.log(openLightbox());

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("show");
  clearInterval(autoSlide);
}

function changeImage(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
  document.getElementById("caption").textContent = captions[currentIndex];
}

function startSlideshow() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => changeImage(1), 3000);
}
