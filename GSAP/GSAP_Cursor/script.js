let Div1 = document.querySelector(".Div1");
// Mahesh@osm25

let Cursor = document.querySelector(".cursor");

let InDiv = document.querySelector(".InDiv");

// Div1.addEventListener("click", (Event) => console.log(Event));
// window.addEventListener("keyup", (Event) => console.log(Event));

Div1.addEventListener("mousemove", (Event) => {
  console.log(Event);
  gsap.to(Cursor, {
    x: Event.x,
    y: Event.y,
    delay: 0,
    ease: "power.inOut",
  });
});

InDiv.addEventListener("mouseenter", () => {
  gsap.to(Cursor, {
    scale: 4,
  });
});
InDiv.addEventListener("mouseleave", () => {
  gsap.to(Cursor, {
    scale: 1,
  });
});
