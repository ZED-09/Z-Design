document.title = "Z - Web Design";

const navMenu = document.querySelector(".nav-menu");
const navList = document.querySelector(".nav-list");

navMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const koloms = document.querySelectorAll(".kolom");

  function checkScroll() {
    const screenPosition = window.innerHeight / 1.2;
    koloms.forEach((kolom) => {
      const kolomPosition = kolom.getBoundingClientRect().top;
      if (kolomPosition < screenPosition) {
        kolom.classList.add("show");
      } else {
        kolom.classList.remove("show");
      }
    });
  }
  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Cek saat halaman dimuat
});

const observerOptions = {
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      const ZElements = entry.target.querySelector(".section-kolom");
      ZElements.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
        }, index * 200);
      });
    } else {
      entry.target.classList.remove("show");
    }
  });
}, observerOptions);

document.querySelectorAll(".section-kolom").forEach((section) => {
  observer.observe(section);
});
