import React from "react";

import "components/Button.scss";

const classNames = require('classnames');

export default function Button(props) {
   let buttonClass = "button";
  
   if (props.confirm){
      buttonClass += " button--confirm";
   } 
   if (props.danger){
      buttonClass += " button--danger";
   }
   
   classNames('') 
   
   
   return (
   <>
          <button 
          onClick={props.onClick}
          disabled={props.disabled} 
          className={buttonClass}
          >
             {props.children}
             </button>
         </>
   );
}
