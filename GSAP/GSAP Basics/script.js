// gsap.to(".Div1", {
//   x: 950,
//   y: 240,
//   duration: 2,
//   delay: 0.5,
// });

// gsap.to(".Div2", {
//   x: 950,
//   duration: 2,
//   delay: 0.5,
// });

// gsap.from(".Div1", {
//   x: 0,
//   y: 0,
//   duration: 5,
//   delay: 3,
// });

// gsap.from(".Div2", {
//   x: 0,
//   duration: 2,
//   delay: 0.5,
// });

// const t1 = gsap.timeline();

// t1.to(".Div1", {
//   x: 950,
//   y: 240,
//   duration: 2,
// delay: 0.5,   //There is no need to set the delay in timeline as it have default delay of 1
// }).to(".Div1", {
//   x: 0,
//   y: 0,
//   duration: 2,
// delay: 0.5,
// });

// const t2 = gsap.timeline();

// t2.to(".Div2", {
//   x: 950,
//   duration: 2,
// delay: 0.5,
// }).to(".Div2", {
//   x: 0,
//   duration: 2,
// delay: 0.5,
// });

// gsap.to(".Div1", {
//   x: 950,
//   y: 240,
//   duration: 2,
//   delay: 0.5,
//   repeat: -1,
//   yoyo: true,
// });

// gsap.to(".Div2", {
//   x: 950,
//   duration: 2,
//   delay: 0.5,
//   repeat: -1,
//   yoyo: true,
// });

// gsap.to(".Div1", {
//   x: 500,
//   duration: 2,
// });
// gsap.from(".Div1", {
//   x: 500,
//   duration: 2,
// repeat: -1,
// yoyo: true,
// });

// gsap.fromTo(
//   ".Div1",
//   { x: 500 }, //from
//   { x: 0, repeat: -1, yoyo: true, duration: 2 } //to
// );

// const tl = gsap.timeline(); // create a timeline

// tl.to(".Div1", { x: 200, duration: 2 }) // Step 1
//   .to(".Div1", { y: 100, duration: 1 }); // Step 2 (starts after Step 1)

// gsap.to(".Div1", {
//   rotate: 600,
//   scale: 2,
//   x: 500,
//   ease: "power3",
//   duration: 3,
//   delay: 2,
//   backgroundColor: "pink",
//   borderRadius: "20px",
//   opacity: 0,
// repeat: -1,
// yoyo: true,
// });

// gsap.from("div", {
//   opacity: 0,
//   duration: 1,
// delay: 1,
// x: 200,
// stagger: 3,
// stagger: -3,
// stagger: 1,
//   repeat: 2,
// });

// gsap.to(".Div1", {
//   x: 500,
//   rotate: 360,
//   duration: 2,
//   delay: 1,
// });
// gsap.to(".Div2", {
//   x: 500,
//   scale: 1.1,
//   backgroundColor: "orange",
//   duration: 2,
//   delay: 3,
// });
// gsap.to(".Div3", {
//   x: 500,
//   rotate: 360,
//   opcity: 0.2,
//   duration: 2,
//   delay: 5,
// });

// const t1 = gsap.timeline();
// t1.to(".Div1", {
//   x: 500,
//   rotate: 360,
//   duration: 2,
//   delay: 1,
// })
//   .to(".Div2", {
//     x: 500,
//     scale: 1.1,
//     duration: 2,
//   })
//   .to(".Div3", {
//     x: 500,
//     backgroundColor: "aqua",
//     borderRadius: "20px",
//     delay: 1,
//   });

const t2 = gsap.timeline();

t2.from(".Nav h2", {
  x: -40,
  scale: 0.8,
  duration: 1,
  opacity: 0,
  delay: 0.4,
});
t2.from("h1", {
  opacity: 0,
  scale: 0.6,
  duration: 2,
});

gsap.from(".Opns h4", {
  x: 40,
  scale: 0.8,
  duration: 2,
  opacity: 0,
  delay: 0.4,
});
