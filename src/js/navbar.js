export function initNavbar() {

    const navbar = document.querySelector(".navbar");
    const logo = document.querySelector(".logo");

    const menu = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");

    const links = document.querySelectorAll("#nav-links a");
    const sections = document.querySelectorAll("section");

    // -------------------------
    // Mobile Menu
    // -------------------------

    menu.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

    // -------------------------
    // Smooth Scroll
    // -------------------------

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            nav.classList.remove("active");

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

    // -------------------------
    // Logo Scroll Top
    // -------------------------

    logo.addEventListener("click", () => {

        nav.classList.remove("active");

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    // -------------------------
    // Active Link
    // -------------------------

    function updateNav() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                current = section.id;

            }

        });

        links.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

        if (window.scrollY > 80) {

            navbar.style.background = "rgba(10,10,15,.85)";
            navbar.style.backdropFilter = "blur(20px)";

        } else {

            navbar.style.background = "rgba(20,20,30,.45)";
            navbar.style.backdropFilter = "blur(18px)";

        }

    }

    updateNav();

    window.addEventListener("scroll", updateNav);

    // -------------------------
    // Hero Buttons
    // -------------------------

    const explore = document.querySelector(".btn-primary");

    if (explore) {

        explore.onclick = () => {

            document.querySelector("#projects").scrollIntoView({

                behavior: "smooth"

            });

        };

    }

    const resume = document.querySelector(".btn-secondary");

    if (resume) {

        resume.onclick = () => {

            window.open("/resume.pdf", "_blank");

        };

    }

}