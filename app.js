// adding active class to the links

const sections = document.querySelectorAll("div .section");
const navItems = document.querySelectorAll("nav div a");

const skillsSection = document.querySelector("#skills");
const techSkills = document.querySelectorAll(".tech-skill .bar span")
const proSkills = document.querySelectorAll(".pro-skill .circular circle")



window.addEventListener("scroll", ()=>{
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(window.pageYOffset >= (sectionTop - sectionHeight/3)){
            current = section.getAttribute("id");            
        }
    })
    
    navItems.forEach(item =>{
        item.classList.remove("active");
        if(item.classList.contains(current)){
            item.classList.add("active")
        }
    })


    // technical skills animation

    const skillsTop = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    console.log(skillsTop);
    console.log(screenPos);
    if(skillsTop < screenPos/4.5 && (skillsTop*(-1)) < screenPos/2){
        console.log("running");
        techSkills.forEach(skill => {
            skill.classList.add("active-bar")
        })
        proSkills.forEach(skill => {
            skill.classList.add("active-circle")
        })
    }
    else{
        techSkills.forEach(skill => {
            skill.classList.remove("active-bar")
        })
        proSkills.forEach(skill => {
            skill.classList.remove("active-circle")
        })
    }



})



// Animations

// Timeline

// const tl = gsap.timeline({defaults:{ease: "power1.out"}});

// tl.to(".text", {y:"0%", duration: 1, stagger: 0.75});

// tl.to(".intro", {y: "-100%", duration: 1, delay:1.2})

// tl.fromTo(".big-text", {opacity: 0}, {opacity: 1, duration: 3})

// tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration:3}, "-=3")

// tl.fromTo(".arrow", 2 ,{y:-50, opacity:0}, {y:5, opacity:1, repeatDelay:0.75, repeat:-1, }, "-=2")



// // FullPage

// new fullpage('#fullpage', {
//   autoScrolling: true,
//   navigation: true,
//   onLeave(origin, destination, direction){
//       const section = destination.item;
//       const tline = new TimelineMax({delay: 0.75})
//       if(destination.index === 1){
//         const myself = document.querySelector(".myself");
//         const education = document.querySelector(".education");
//         tline.fromTo(myself, 2, {x: -100, opacity:0}, {x: 0, opacity:1})
//             .fromTo(education, 2, {x: 100, opacity:0}, {x: 30, opacity:1}, "-=2")
//       }
//   }
// })
