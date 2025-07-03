// gsap.from(" .Page1 .Box", {
//   rotate: 450,
//   duration: 2,
//   // delay: 1,
//   scale: 0.5,
//   ease: "dramatic",
//   scrollTrigger: " .Page1 .Box",
// });

// gsap.from(" .Page2 .Box", {
//   rotate: 450,
//   duration: 2,
//   // delay: 1,
//   scale: 0.9,
//   ease: "dramatic",
//   scrollTrigger: {
//     trigger: ".Page2 .Box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//   },
// });

// gsap.from(".B1", {
//   x: 500,
//   opacity: 0,
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".B1",
//     scroller: "body",
//     markers: "true",
//     start: "top 60%",
//     end: "top 30%",
//     scrub: true,
//     // scrub: 2,
//     pin: true,
//   },
// });
// gsap.from(".B2", {
//   x: -500,
//   duration: 2,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".B2",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     scrub: true,
//   },
// });

// gsap.from(".Page1 .Box", {
//   scale: 0.9,
//   rotate: 450,
//   duration: 2,
// });
// gsap.from(".Page2 .Box", {
//   scale: 0.9,
//   rotate: 450,
//   delay: 3,
//   duration: 2,
// });
// gsap.from(".Page3 .Box", {
//   scale: 0.9,
//   rotate: 450,
//   duration: 2,
// });

gsap.to(".Page2 h1", {
  // transform: translateX(-4500),
  x: -4500,
  duration: 5,
  delay: 0.4,
  scrollTrigger: {
    // trigger: ".Page2 h1",
    trigger: ".Page2 ",
    scroller: "body",
    markers: true,
    // start: "top 40%",
    // end: "top 10%",
    start: "top 0%",
    end: "top -130%",
    // pin: true,
    // scrub: 2,
  },
});
