const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expended", false)
    : navToggle.setAttribute("aria-expended", true);
  primaryNav.toggleAttribute("data-visible");
});


  const slider = new A11YSlider(document.querySelector(".slider"), {
    adaptiveHeight: true,
    dots: true,
    arrows: false,
    responsive: {
      1280: {
        slidesToShow: 4,
        arrows: true
      },
      480: {
        slidesToShow: 1,
        dots: true,
        arrows: false
      },
    },
  });
