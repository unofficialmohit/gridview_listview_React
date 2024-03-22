import React from "react";
import Data from "./Data";
async function  dataFetch()
{
 const response= await fetch("https://jsonplaceholder.typicode.com/todos");
  const data=await response.json();
  return data;
}
const data=await dataFetch();
function DisplayData(){
const[dataToDisplay,setDataToDisplay]=React.useState(data);
const[gridView,setGridView]=React.useState(false);
console.log(dataToDisplay);
function handleClick(){
setGridView((prevData)=>!prevData);
}
return(
    <div>
    <button onClick={handleClick} className="btn">CLICK HERE TO CHANGE UI</button>
    <div className={gridView?"gridcontainer":"listcontainer"}>
     {dataToDisplay.map((item)=>{
         return <Data detail={item} grid={gridView}/>
        })}
    </div>
        </div>
  )
}
export default DisplayData;