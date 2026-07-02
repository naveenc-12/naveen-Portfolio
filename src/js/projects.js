const projectData = {

    vr: {

        title: "Virtual Home Preview",

        description:
            "A VR application developed using Unity that allows users to explore a virtual house before construction. Users can freely navigate rooms and experience the environment in an immersive way."

    },

    vote: {

        title: "Secure Online Electronic Voting System",

        description:
            "Final year project developed using Blockchain Technology. The system provides secure electronic voting with blockchain-based validation to ensure transparency, integrity and tamper resistance."

    },

    papfly: {

        title: "PapFly",

        description:
            "A Unity 2D endless runner inspired by Flappy Bird featuring smooth gameplay, score tracking and responsive controls."

    },

    wonder: {

        title: "7 Wonders of the World",

        description:
            "A collection of detailed 3D models of the Seven Wonders created in Blender for visualization and rendering."

    }

};

export function initProjects() {

    const modal = document.getElementById("projectModal");

    const title = document.getElementById("modalTitle");

    const description = document.getElementById("modalDescription");

    const close = document.getElementById("closeModal");

    const buttons = document.querySelectorAll(".details-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const project = projectData[button.dataset.project];

            title.textContent = project.title;

            description.textContent = project.description;

            modal.classList.add("show");

        });

    });

    close.addEventListener("click", () => {

        modal.classList.remove("show");

    });

    window.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.classList.remove("show");

        }

    });

}