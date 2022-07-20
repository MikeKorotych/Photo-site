const navLinks = document.querySelectorAll(".nav-link");

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

anime({
  targets: "#demo",
  value: [0, 100],
  // duration: 4000,
  round: 1,
  borderRadius: ["0px", "36px"],
  opacity: 0.5,
  easing: "easeInOutQuad",
});

const btns = document.querySelectorAll(".btn");
const read = document.querySelectorAll("#read");

btns.forEach(function (btn) {
  btn.addEventListener("mouseenter", function (e) {
    console.log("mouseenter");
    // LENS
    if (e.target) {
      anime({
        targets: "#lens3 path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 900,
        opacity: [0, 1],
        rotate: "1turn",
        // transformOrigin: "center",
        // transformBox: "fill-box",
        // rotate: 360,
        delay: function (el, i) {
          return i * 250;
        },
      });
      // READ
      anime({
        targets: read,
        translateX: [-11, 0],
        duration: 400,
        easing: "easeInOutQuad",
      });
    }
  });
});
btns.forEach(function (btn) {
  btn.addEventListener("mouseout", function (e) {
    console.log("mouseout");

    // LENS
    anime({
      targets: "#lens3 path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "linear",
      duration: 250,
      opacity: [0, 1],
      direction: "reverse",
      // delay: 500,
      delay: function (el, i) {
        return i * 0;
      },
    });
    // READ
    anime({
      targets: read,
      translateX: [0, -11],
      duration: 400,
      // delay: 500,
      easing: "easeInOutQuad",
    });
  });
});

// anime({
//   targets: "#lens3 path",
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: "linear",
//   duration: 0,
//   opacity: [1, 0],
//   delay: function (el, i) {
//     return i * 0;
//   },
// });

// anime({
//   targets: read,
//   translateX: [20, -11],
//   duration: 300,
//   opacity: [0, 1],
//   easing: "easeInOutQuad",
// });

anime({
  targets: "#black-round path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutQuad",
  // easing: "easeInOutSine",

  // easing: "linear",
  // direction: "reverse",
  duration: 200,

  delay: function (el, i) {
    return i * 50;
  },
});
