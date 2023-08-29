const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");
const images = document.querySelectorAll(".section4-img img");

const testimonials = [
  {
    name: "Rajiv Khanna",
    text: "Wow.B13 is a fantastic site for sports trading. Now I can manage it easily. It is very easy to create an account. It’s a secure platform as well",
  },
  {
    name: "Huma Parvaiz",
    text: "Their Service is excellent, and wallet creation is also very easy. The transaction is also too smooth its really good for my financial build-up.",
  },
  {
    name: "Akansha Mitra",
    text: "Thumps Up to you guys. I have really enjoyed using B13. I'm impressed by your managing skills. I will definitely refer it to my friends",
  },
];

let currentImageIndex = 1;

function updateSlider(index) {
  images[currentImageIndex].classList.remove("active");
  images[index].classList.add("active");
  currentImageIndex = index;

  document.getElementById("testimonialName").textContent =
    testimonials[index].name;
  document.getElementById("testimonialText").textContent =
    testimonials[index].text;
}

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    updateSlider(index);
  });
});

prevArrow.addEventListener("click", () => {
  const newIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateSlider(newIndex);
});

nextArrow.addEventListener("click", () => {
  const newIndex = (currentImageIndex + 1) % images.length;
  updateSlider(newIndex);
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Show the current slide with a fade-in effect
  slides[slideIndex - 1].style.opacity = 1;

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".header").addClass("sticky");
  } else {
    $(".header").removeClass("sticky");
  }
});
