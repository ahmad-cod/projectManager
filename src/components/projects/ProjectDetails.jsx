import React from 'react'

const ProjectDetails = (props) => {
    console.log(props);
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, necessitatibus. Eum quidem vero quis fugiat odit ad placeat sed quas, excepturi aperiam natus reprehenderit? Nisi tenetur voluptas expedita enim eos?
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Net Prince</div>
                    <div>7th June, 10:40 AM</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
