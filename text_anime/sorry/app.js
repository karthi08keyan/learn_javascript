let tl = gsap.timeline();

tl.from("h1 span>span", {
  duration: 0.75,
  y: 150,
  autoAlpha: 0,
  ease: Power3.out,
  stagger: 1.5
}).from("li", {
  duration: 0.75,
  x: 300,
  autoAlpha: 0,
  ease: "elastic.out(1, 1)",
  stagger: {
    each: 0.75,
    amount: 0.5
  }
}, "+=0.25");
