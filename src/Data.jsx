import React from "react";
export default function Data(props){
   return(
    // <div className="grid">
    <div className={props.grid?"grid":"list"}>
        <div className="data-userid">User ID : {props.detail.userId}</div>
        <div className="data-id">ID : {props.detail.id}</div>
        <div  className="data-title">Title : {props.detail.title}</div>
        <hr></hr>
        <div className="data-complete">{props.detail.complete?"Completed":"Not Completed"}</div>        
    </div>
   ) 
}