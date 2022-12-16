gsap.to(".feature-text",{
    scrollTrigger:{
        trigger:".features",
        start: "top center",
        toggleActions: "restart none none none",
    },
    top: 0,
    visibility : "visible",
    duration: 1
})


gsap.to(".feature-animation",{
    scrollTrigger:{
        trigger:".features",
        start: "top center",
        toggleActions: "restart none none erase",
    },
    opacity :1,
    duration: 2
})



creatorPicAnimation={trigger:".creators",
    start: "90px bottom",
    toggleActions: "restart none reverse play",
};

gsap.to(".pic1",{
    scrollTrigger:creatorPicAnimation,
    left:0,
    rotate: 0,
    duration: 2
})

gsap.fromTo(".pic2",{
    opacity:0,
    visibility:"visible"
},
{
    scrollTrigger:creatorPicAnimation,
    top:0,
    opacity:1,
    ease:"back.out(1.7)",
    duration: 2
})

gsap.fromTo(".pic3",
{
    opacity:0,
},
{
    scrollTrigger:creatorPicAnimation,
    opacity:1,
    top: 0,
    duration: 2
})


gsap.fromTo(".join-now-btn",
{
    opacity:0
},
{
    scrollTrigger:{
        trigger:".joinUs",
        start: "-80% top",
        end: "120% bottom",
        scrub: true,
        toggleActions: "restart none reverse play"
    },
    y:-350 ,
    opacity: 1,
    zIndex: 1,
    duration: 2
})



