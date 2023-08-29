const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");
const images = document.querySelectorAll(".section4-img img");

const testimonials = [
  {
    name: "Kylan Gentry",
    text: "B13 is a fantastic site for sports trading, in my opinion. My finances are easy to manage thanks to the simplicity of opening a wallet and the speedy transfers. With their devoted assistance, I feel secure about my trading endeavors.",
  },
  {
    name: "Alex Johnson",
    text: "I've been using B13 for a while now, and it has exceeded my expectations. The intuitive interface, quick transactions, and helpful support have made my sports trading experience truly enjoyable.",
  },
  {
    name: "Emily Rodriguez",
    text: "Sports trading on B13 has transformed the way I approach investing. The platform's reliability and user-friendly features have given me the confidence to explore new trading opportunities.",
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

$(document).ready(function () {
  const $openMenuBtn = $(".openMenuBtn");
  const $sideMenu = $(".side-menu");
  const $menuLinks = $sideMenu.find("a");
  const $overlay = $(".overlay");

  // Open side menu
  $openMenuBtn.click(function () {
    console.log($sideMenu.addClass("active"));
    $sideMenu.addClass("active");
    $overlay.show();
  });

  // Close side menu
  function closeSideMenu() {
    $sideMenu.removeClass("active");
    $overlay.hide();
  }
  $(".close-menu-btn").click(function () {
    closeSideMenu();
  });
  // Close side menu when a link is clicked
  $menuLinks.click(function () {
    closeSideMenu();
  });

  // Close side menu when overlay is clicked
  $overlay.click(function () {
    closeSideMenu();
  });

  // Close side menu when clicking anywhere outside the menu
  $(document).on("click", function (event) {
    if (
      !$(event.target).closest($sideMenu).length &&
      !$(event.target).is($openMenuBtn) &&
      !$(event.target).is($overlay)
    ) {
      closeSideMenu();
    }
  });
});
