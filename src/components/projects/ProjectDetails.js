import React from 'react';

const ProjectDetails = (props) => {
    console.log(props)
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in tellus mi. Proin id efficitur dui. Suspendisse imperdiet egestas nulla vitae mollis. Curabitur a orci dictum, vestibulum nulla quis, lacinia elit. Aenean interdum ipsum at libero commodo fringilla. Nam posuere ut ipsum sit amet ornare. Ut velit tellus, aliquet eget tristique sed, sagittis a odio. Aenean sagittis et nisi sit amet vulputate. Nulla id nibh fermentum, pulvinar felis in, malesuada metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse vitae cursus tellus. Duis eget elit vel leo scelerisque tincidunt nec a massa. Maecenas odio lectus, consectetur in dolor eu, faucibus auctor sapien. Morbi rutrum hendrerit velit a suscipit.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by ME</div>
                    <div className="grey-text">2nd September</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
