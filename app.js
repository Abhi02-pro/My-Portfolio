// adding active class to the links




// Animations

// Timeline

const tl = gsap.timeline({defaults:{ease: "power1.out"}});

tl.to(".text", {y:"0%", duration: 1, stagger: 0.75});

tl.to(".intro", {y: "-100%", duration: 1, delay:1.2})

tl.fromTo(".big-text", {opacity: 0}, {opacity: 1, duration: 3})

tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration:3}, "-=3")

tl.fromTo(".arrow", 2 ,{y:-50, opacity:0}, {y:5, opacity:1, repeatDelay:0.75, repeat:-1, }, "-=2")



// FullPage

new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  onLeave(origin, destination, direction){
      const section = destination.item;
      const tline = new TimelineMax({delay: 0.75})
      if(destination.index === 1){
        const myself = document.querySelector(".myself");
        const education = document.querySelector(".education");
        tline.fromTo(myself, 2, {x: -100, opacity:0}, {x: 0, opacity:1})
            .fromTo(education, 2, {x: 100, opacity:0}, {x: 30, opacity:1}, "-=2")
      }
  }
})
