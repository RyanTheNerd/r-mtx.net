
function ProjectCard(props) {
   return (
      <div className="col-md-4 project-card my-2">
         <div className="card" >
            <a href={props.URL} target="_blank">
               <img 
                  src={props.imgURL} 
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
