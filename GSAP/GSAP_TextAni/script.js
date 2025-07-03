let H1 = document.querySelector("h1");

// console.log(H1);
// console.log(H1.innerText);
// console.log(h1.textContent);

let HText = H1.innerText;
console.log(HText);
console.log(HText.split(""));
let SplittedText = HText.split("");
console.log("Len: ", SplittedText.length);
let HLen = Math.ceil(SplittedText.length / 2);
console.log("HLen: ", HLen);
let Clutter = "";
// let Clutter;
let Indx = 0;
// for (let Element of SplittedText) {
//   // console.log(Element);
//   // Clutter += "Yes1 ";
//   Indx++;
//   if (Indx <= HLen) {
//     Clutter += `<span class="I1">${Element}</span>`;
//   } else {
//     Clutter += `<span class="I2">${Element}</span>`;
//   }
// }
SplittedText.forEach((Element, Index) => {
  // console.log(Element);
  if (Index <= HLen) {
    Clutter += `<span class="I1">${Element}</span>`;
  } else {
    Clutter += `<span class="I2">${Element}</span>`;
  }
});
// console.log(Clutter);
H1.innerHTML = Clutter;

// gsap.from("h1 span", {
//   y: 50,
//   duration: 0.8,
//   delay: 0.1,
//   stagger: 0.2,
//   // stagger: -0.2,
//   opacity: 0,
// });

gsap.from("h1 .I1", {
  y: 50,
  duration: 0.8,
  delay: 0.1,
  stagger: 0.2,
  // stagger: -0.2,
  opacity: 0,
});
gsap.from("h1  .I2", {
  y: 50,
  duration: 0.8,
  delay: 0.1,
  stagger: -0.2,
  // stagger: -0.2,
  opacity: 0,
});

// GOing to EAt
