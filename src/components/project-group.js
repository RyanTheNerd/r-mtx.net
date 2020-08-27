import React from "react";
import ProjectCard from "./project-card";

export default class ProjectGroup extends React.Component {
    constructor(props) {
        super(props);
        this.projects = props.projectData.map((p, i) => {
            return (
            <ProjectCard 
                URL={p.URL} 
                imgURL={p.imgURL} 
                title={p.title} 
                text={p.text}
                key={i} />
            );
        });
    }
    render() {
        return(
            <div id={this.props.id} className="my-5">
                <h1 className="text-center my-5">{this.props.title}</h1>
                <div className="well row mb-4">
                    {this.projects}
                </div>
            </div>
        );

    }
}