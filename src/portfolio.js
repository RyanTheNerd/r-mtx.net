import React, {Component} from "react";
import ProjectList from "./components/project-group";
import Contact from "./components/contact";
import NavLink from "./components/nav-link";


export default class Portfolio extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return(
<div>
   
   
<div className="jumbotron mb-0 pb-4 rounded-0">
   <h1 className="display-3">Ryan Mattox</h1>
   <p className="lead ml-3">
      Frontend Web Developer
   </p>
</div>
<div className="navbar navbar-dark bg-dark justify-content-start">
   <a className="navbar-brand" href="#">Home</a>
   <NavLink href="#personal" title="Personal Projects"/>
   <NavLink href="#fcc" title="FCC Projects"/>
   <NavLink href="#platforms" title="Platforms"/>
   <NavLink href="#contacts" title="Contacts"/>
</div>

<div id="projects" className="container">
   <ProjectList id="personal" title="Personal Projects" projectData={this.props.personal}/>
   <ProjectList id="fcc" title="FreeCodeCamp Projects" projectData={this.props.fcc}/>
</div>
<div className="container">
<footer className="page-footer py-5">
   <h1 className="text-center mb-4 mt-5">Check me out on these platforms:</h1>
   <div className="container-fluid">
      <div className="row" id="contacts">
         <Contact href="https://github.com/RyanTheNerd" 
            src={"/img/github.png"}/>
         
         <Contact href="https://codepen.io/Haggleforth"
            src={"/img/codepen.png"}/>
         
         <Contact href="https://www.freecodecamp.org/ryanthenerd"
            src={"/img/fcc.png"}/>
      </div>
   </div>
</footer>
</div>


</div> 
      );
   }
}