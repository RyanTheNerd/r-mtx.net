import React from "react";
const images = require.context('../', true, /\.png$/i);
console.log(images.keys());
console.log(images("./img/asthetics.png"))
function ProjectCard(props) {
   return (
      <div className="col-md-4 project-card my-2">
         <div className="card">
            <a href={props.URL} target="_blank">
               <img 
                  src={images('./img/' + props.imgURL).default} 
                  style={{backgroundColor: "black"}}
                  className="card-img-top"
               />
            </a>
            <div className="card-body">
               <h4 className="card-title">{props.title}</h4>
               <div className="card-text">{props.text}</div>
            </div> 
         </div>
      </div>
   );
}

export default ProjectCard;
