import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function startIntro() {

    const enterScreen = document.getElementById("enter-screen");
    const website = document.getElementById("website");

    gsap.to(enterScreen,{

        opacity:0,

        duration:.8,

        onComplete:()=>{

            enterScreen.style.display="none";

            website.style.display="block";

            initAnimations();

        }

    });

}

function initAnimations(){

    gsap.from(".navbar",{

        y:-80,

        opacity:0,

        duration:1,

        ease:"power3.out"

    });

    gsap.from(".hero-left>*",{

        y:40,

        opacity:0,

        duration:1,

        stagger:.15,

        ease:"power3.out"

    });

    gsap.from("#cube-container",{

        scale:.8,

        opacity:0,

        duration:1.2,

        ease:"power3.out"

    });

    animateSection(".about");

    animateSection(".skills");

    animateSection(".experience");

    animateSection(".projects");

    animateSection(".contact");

    //animateCards(".skill-card");

    //animateCards(".project-card");

    //animateCards(".contact-card");

    //animateCards(".timeline-item");

}

function animateSection(selector){

    gsap.from(selector,{

        y:80,

        opacity:0,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{

            trigger:selector,

            start:"top 80%"

        }

    });

}

function animateCards(selector){

    gsap.from(selector,{

        y:60,

        opacity:0,

        duration:.8,

        stagger:.15,

        ease:"power3.out",

        scrollTrigger:{

            trigger:selector,

            start:"top 90%"

        }

    });

}