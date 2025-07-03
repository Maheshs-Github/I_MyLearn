// let Path = "M 5 200 Q 340 200  1200 200";
let Path = "M 5 200 Q 340 200  1600 200";
// let FPath = "M 22 200 Q 600 200  1200 200";
let FPath = "M 22 200 Q 600 200  1600 200";

let div1 = document.querySelector(".Div1");

// div1.addEventListener("click", (dets) => console.log("Field Clicked", dets.x));

// div1.addEventListener("mouseenter", () => console.log(`Mouse Entered`));

// div1.addEventListener("mouseleave", () => console.log(`Mouse Left`));

div1.addEventListener("mousemove", (dets) => {
  // console.log("Mouse Moved ", dets.x);
  console.log("Mouse Moved ", dets);
  // Path = `M 5 200 Q 600 ${dets.y}  1200 200`;
  Path = `M 5 200 Q 600 ${dets.y}  1600 200`;
  // console.log("Path: ", Path);
  gsap.to("svg path ", {
    attr: { d: Path },
    duration: 0.3,
    ease: "power1.inOut",
  });
});

div1.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: FPath },
    duration: 1.5,
    ease: "elastic.inOut(1,0.2)",
  });
});
