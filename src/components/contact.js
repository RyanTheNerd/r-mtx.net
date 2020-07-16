import React from "react";

function Contact(props) {
   return (
<div className="col-sm-4 contact">
   <a href={props.href} target="_blank">
      <img className="img-fluid" src={props.src}/>
   </a>
</div>
   );
}

export default Contact;