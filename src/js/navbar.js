export function initNavbar() {

    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");
    const navbar = document.querySelector(".navbar");
    const logo = document.querySelector(".logo");

    // -------------------------
    // Smooth Scroll
    // -------------------------

    links.forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(!target) return;

            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        });

    });

    // -------------------------
    // Logo Scroll Top
    // -------------------------

    logo.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    // -------------------------
    // Active Link
    // -------------------------

    function updateNav(){

        let current="hero";

        sections.forEach(section=>{

            const top=section.offsetTop-200;
            const height=section.offsetHeight;

            if(window.scrollY>=top){

                current=section.id;

            }

        });

        links.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

        // Navbar Background

        if(window.scrollY>80){

            navbar.style.background="rgba(10,10,15,.8)";
            navbar.style.backdropFilter="blur(25px)";
            navbar.style.borderColor="rgba(142,0,251,.25)";

        }

        else{

            navbar.style.background="rgba(20,20,30,.45)";
            navbar.style.backdropFilter="blur(18px)";
            navbar.style.borderColor="rgba(255,255,255,.08)";

        }

    }

    updateNav();

    window.addEventListener("scroll",updateNav);

    // -------------------------
    // Hero Buttons
    // -------------------------

    const explore=document.querySelector(".btn-primary");

    if(explore){

        explore.onclick=()=>{

            document.querySelector("#projects").scrollIntoView({

                behavior:"smooth"

            });

        }

    }

    const resume=document.querySelector(".btn-secondary");

    if(resume){

        resume.onclick=()=>{

            window.open("/resume.pdf","_blank");

        }

    }

}