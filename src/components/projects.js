export function projects() {

return `

<section id="projects" class="projects">

    <div class="projects-header">

        <span class="section-tag">
            MY PROJECTS
        </span>

        <h2>Featured Projects</h2>

        <p>
            A selection of projects showcasing my experience in Unity,
            VR, Blockchain and Web Development.
        </p>

    </div>

    <div class="projects-grid">

        <!-- Project 1 -->

        <div class="project-card">

            <div class="project-image">

                <img
                    src="/images/projects/vr-home.png"
                    alt="Virtual Home Preview"
                >

            </div>

            <div class="project-content">

                <h3>Virtual Home Preview</h3>

                <p>
                    Interactive AR application allowing users to explore
                    and visualize home interiors.
                </p>

                <div class="project-tech">

                    <span>Unity</span>
                    <span>VR</span>
                    <span>C#</span>

                </div>

                <button
                    class="details-btn"
                    data-project="vr">

                    View Details

                </button>

            </div>

        </div>

        <!-- Project 2 -->

        <div class="project-card">

            <div class="project-image">

                <img
                    src="/images/projects/blockchain-voting.png"
                    alt="Blockchain Voting"
                >

            </div>

            <div class="project-content">

                <h3>Data Processing REST API (FastAPI)</h3>

                <p>
                   ● Built a backend REST API using FastAPI with GET and POST endpoints, including file upload support for CSV 
                     data. 
                   ● Processed and transformed uploaded CSV files using Pandas, returning structured JSON responses to the client. 
                   ● Documented and tested all endpoints using FastAPI's built-in Swagger UI for interactive API exploration. 
                </p>

                <div class="project-tech">

                    <span>Data Processing</span>
                    <span>Python</span>

                </div>

                <button
                    class="details-btn"
                    data-project="vote">

                    View Details

                </button>

            </div>

        </div>

        <!-- Project 3 -->

        <div class="project-card">

            <div class="project-image">

                <img
                    src="/images/projects/papfly.png"
                    alt="PapFly"
                >

            </div>

            <div class="project-content">

                <h3>PapFly</h3>

                <p>
                    Endless runner mobile game developed
                    using Unity Engine.
                </p>

                <div class="project-tech">

                    <span>Unity</span>
                    <span>2D</span>
                    <span>C#</span>

                </div>

                <button
                    class="details-btn"
                    data-project="papfly">

                    View Details

                </button>

            </div>

        </div>
        

        <!-- Project 4 -->

        <div class="project-card">

            <div class="project-image">

                <img
                    src="/images/projects/wonders.png"
                    alt="7 Wonders"
                >

            </div>

            <div class="project-content">

                <h3>7 Wonders of the World</h3>

                <p>
                    High-quality 3D models created in Blender
                    showcasing the Seven Wonders.
                </p>

                <div class="project-tech">

                    <span>Blender</span>
                    <span>3D</span>

                </div>

                <button
                    class="details-btn"
                    data-project="wonder">

                    View Details

                </button>

            </div>

        </div>

        <!-- Project 5 -->

        <div class="project-card">

            <div class="project-image">

                <img
                    src="/images/projects/Cube.png"
                    alt="Infinity Cubes"
                >

            </div>

            <div class="project-content">

                <h3>Infinity Cubes</h3>

                <p>
                    Endless runner mobile game developed
                    using Unity Engine.
                </p>

                <div class="project-tech">

                    <span>Unity</span>
                    <span>2D</span>
                    <span>C#</span>

                </div>

                <button
                    class="details-btn"
                    data-project="infinity-cubes">

                    View Details

                </button>

            </div>

        </div>

    </div>

    <div id="projectModal" class="project-modal">

        <div class="modal-content">

            <span id="closeModal">&times;</span>

            <h2 id="modalTitle"></h2>

            <p id="modalDescription"></p>

        </div>

    </div>

</section>

`;

}