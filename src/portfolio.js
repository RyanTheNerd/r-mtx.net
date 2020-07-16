import React, {Component} from "react";
import ProjectCard from "./components/project-card";
import Contact from "./components/contact";
import {baseURL} from "./portfolio-data";


export default class Portfolio extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      let fccProjects = this.props.fcc.map(
         (p) => {return <ProjectCard 
             URL={baseURL + p.URL} 
             imgURL={baseURL + p.imgURL} 
             title={p.title} 
             text={p.text}
             key={p.key} />
         }
      );
      let personalProjects = this.props.personal.map(
         (p) => {return <ProjectCard 
             URL={baseURL + p.URL} 
             imgURL={baseURL + p.imgURL} 
             title={p.title} text={p.text}
             key={p.key} />
         }
      );
      return(
<div>
   
   
<div className="jumbotron">
   <h1 className="display-3">Ryan Mattox</h1>
   <p className="lead ml-3">Front End Web Developer</p>
</div>

<div id="projects" className="container">
   <h1 className="text-center mb-4 mt-5">Personal Projects</h1>
   <div className="well row mb-4">
      {personalProjects}
   </div>

   <h1 className="text-center mb-4 mt-5">Free Code Camp Projects</h1>
   <div className="well row mb-4">
      {fccProjects}
   </div>

<footer className="page-footer py-5">
   <h1 className="text-center mb-4 mt-5">Check me out on these platforms:</h1>
   <div className="container-fluid">
      <div className="row" id="contacts">
         <Contact href="https://github.com/RyanTheNerd" 
            src={baseURL + "/img/github.png"}/>
         
         <Contact href="https://codepen.io/Haggleforth"
            src={baseURL + "/img/codepen.png"}/>
         
         <Contact href="https://www.freecodecamp.org/ryanthenerd"
            src={baseURL + "/img/fcc.png"}/>
      </div>
   </div>
</footer>
</div>
   
   
</div> 
      );
   }
}