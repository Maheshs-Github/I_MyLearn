let OMenu = document.querySelector(".Icon i");

OMenu.addEventListener("click", () => {
  console.log("Menu Clicked");
  T1.play();
});

let CMenu = document.querySelector(".Cont i");

CMenu.addEventListener("click", () => {
  console.log("Close Button Clicked");
  // T1.reverse();
  // T1.restart();
  T1.progress(0).pause();
});

let Button = document.querySelector("button");
Button.addEventListener("click", () => {
  console.log("button clicked");
  // T1.restart();
  // T1.reverse();
  T1.reverse().seek(3);
  //we reverse the timeline but after 1 sec
});

let T1 = gsap.timeline();

T1.from(".Name", {
  y: -300,
  duration: 1,
  opacity: 0,
});

T1.to(".Cont", {
  right: 0,
});

T1.from(".Cont li", {
  x: 150,
  delay: 0,
  duration: 0.5,
  stagger: 0.5,
  opacity: 0,
});

T1.from(".Cont i", {
  // y: -40,
  opacity: 0,
  duration: 1,
});

T1.from("button", {
  opacity: 0,
  scale: 0.2,
  duration: 2,
});

T1.pause();
