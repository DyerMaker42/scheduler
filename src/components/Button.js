import React from "react";

import "components/Button.scss";

export default function Button(props) {
   let buttonClass = "button";
   let disableClass = false;
   if (props.confirm){
      buttonClass += " button--confirm";
   } 
   if (props.danger){
      buttonClass += " button--danger";
   }
   if (props.onClick){
      ;
   }
   if (props.disabled){
       disableClass = true;
   }
   
   
   return <>
          <button disabled={disableClass} className={buttonClass}>{props.children}</button>
         </>;
}
