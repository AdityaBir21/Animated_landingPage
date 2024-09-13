function page1Animation() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav h4 , nav button", {
    y: -40,
    duration: 0.4,
    delay: 0.3,
    opacity: 0,
    stagger: 0.15,
  });

  tl.to("nav i",{
    rotateZ:315,
    delay:0.1,
    duration:0.3
  })

  tl.from(".center_part1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.5,
  });

  tl.from(".center_part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".center_part1 button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    ".center_part2 img",
    {
      x: 200,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.6"
  );

  tl.from(".section1bottom img", {
    y: 30,
    opacity: 0,
    duration: 0.4,
    stagger: 0.15,
  });
}

function page2Animation() {
  gsap.from(".services h3", {
    x: -100,
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".services h3",
      scroller: "body",
      start: "top 50%",
    },
  });

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top -50%",
      scrub: 2,
    },
  });

  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.3,
  });

  tl2.from(
    ".element.box1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "first"
  );
  tl2.from(
    ".element.box.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "first"
  );

  tl2.from(
    ".element.box.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "second"
  );
  tl2.from(
    ".element.box2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "second"
  );

  tl2.from(
    ".element.box1.swipeleft",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "third"
  );

  tl2.from(
    ".element.box.swiperight",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "third"
  );
}

function page3Animation(){
gsap.from(".container2 img",{
  opacity:0,
  y:30,
  delay:0.4,
  duration:0.6,
  scrollTrigger:{
    trigger:".section3",
    start:"top 50%",
    end:"top 40%",
  }
});

gsap.from(".casestudy h3", {
  x: -100,
  opacity: 0,
  duration: 0.4,
  scrollTrigger: {
    trigger: ".casestudy h3",
    scroller: "body",
    start: "top 40%",
  },
});

gsap.from(".casestudy",{
  y:30,
  opacity: 0,
  duration: 0.3,
  scrollTrigger: {
    trigger: ".casestudy",
    scroller: "body",
    start: "top 50%",
    end:"top 35%",
    scrub:2
  }
});
}

page1Animation();
page2Animation();
page3Animation();



