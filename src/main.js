import "./css/main.css";

// Components
import { loadingScreen } from "./components/loading";
import { enterScreen } from "./components/enterScreen";
import { navbar } from "./components/navbar";
import { hero } from "./components/hero";
import { about } from "./components/about";
import { skills } from "./components/skills";
import { experience } from "./components/experience";
import { projects } from "./components/projects";
import { contact } from "./components/contact";
import { footer } from "./components/footer";

// Scripts
import { startIntro } from "./js/animation";

import { initProjects } from "./js/projects";
import { initNavbar } from "./js/navbar";

document.querySelector("#app").innerHTML = `

${loadingScreen()}

${enterScreen()}

<div id="website" style="display:none;">

<div class="background-grid"></div>

${navbar()}

${hero()}

${about()}

${skills()}

${experience()}

${projects()}

${contact()}

${footer()}

</div>

`;

const loadingScreenElement = document.getElementById("loading-screen");
const enterScreenElement = document.getElementById("enter-screen");
const enterBtn = document.getElementById("enterBtn");
const website = document.getElementById("website");

setTimeout(() => {

    loadingScreenElement.style.display = "none";
    enterScreenElement.style.display = "flex";

}, 2500);

function launchPortfolio() {

    if (website.style.display === "block") return;

    startIntro();

    setTimeout(() => {

        initProjects();

        initNavbar();

    }, 850);

}

enterBtn.addEventListener("click", launchPortfolio);

document.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        launchPortfolio();

    }

});