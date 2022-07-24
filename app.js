const navLinks = document.querySelectorAll(".nav-link");

const btns = document.querySelectorAll(".btn");
const read = document.querySelectorAll("#read");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
const header = document.querySelector(".section-1");
const allSections = document.querySelectorAll("section");
const overlay = document.querySelector(".overlay");

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Reveal sections
const revealSections = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//handleHover
const handleHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const lastLink = link.closest(".nav").querySelector(".r");
    const siblings = link.closest(".nav").querySelectorAll(".nav-link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = 1;
    lastLink.style.opacity = 1;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Page navigation

document
  .querySelector(".nav-links__wrapper")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target);

    if (e.target.classList.contains("nav-link")) {
      const id = e.target.getAttribute("href");
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

/////////////////////////////////////////////////////////////////////////
anime({
  targets: navLinks,
  translateX: [50, 0],
  opacity: [0, 1],
});

anime({
  targets: ".nav-logo",
  translateX: [-50, 0],
  opacity: [0, 1],
});

const confirmAnim = anime({
  targets: ".confirm span",
  translateX: [-370, 0],
  duration: 2000,
});
const confirm = document.querySelector(".confirm");
confirm.addEventListener("click", (e) => {
  confirmAnim.restart();
});

// const btnAnimitem_1 = anime({
//   targets: `#black-round-${num} path`,
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: "easeInOutQuad",
//   autoplay: false,
//   duration: 200,
//   delay: function (el, i) {
//     return i * 50;
//   },
// });

const itemWrapper = document.querySelector(".section-2__item--wrapper");
const items = document.querySelectorAll(".btn__item");

// itemWrapper.addEventListener("click", (e) => {
//   const clicked = e.target.closest(".btn");

//   if (!clicked) return;

//   // btns.forEach((i) => btnAnimation.restart());
//   btnAnim.restart();

//   console.log(btnAnim, clicked);
// });

items.forEach((i) =>
  i.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target.closest(".btn");
    if (!clicked) return;
    const num = clicked.dataset.number.slice(-1);
    if (i.classList.contains(clicked.dataset.number)) {
      // i.classList.toggle("active");
      // overlay.classList.toggle("hidden");
      const btnAnimitem_1 = anime({
        targets: `#black-round-${num} path`,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        // easing: "easeInOutQuad",
        // easing: "easeInOutExpo",
        autoplay: false,
        duration: 200,
        delay: function (el, i) {
          return i * 70;
        },
      });
      btnAnimitem_1.restart();
    }
  })
);

// Links Anim
