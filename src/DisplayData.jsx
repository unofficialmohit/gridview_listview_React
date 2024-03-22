import React from "react";
import Data from "./Data";
let data;

console.log(data);

function DisplayData(){
const[dataToDisplay,setDataToDisplay]=React.useState([]);
React.useEffect(()=>{
  const fetchData= async ()=>
  {
   const response= await fetch("https://jsonplaceholder.typicode.com/todos");
    const result=await response.json();
    setDataToDisplay(result);
  }
  fetchData();
},[]);
const[gridView,setGridView]=React.useState(false);
console.log(dataToDisplay);
function handleClick(){
setGridView((prevData)=>!prevData);
}
return(
    <div>
    <button onClick={handleClick} className="btn">CLICK HERE TO CHANGE UI</button>
    <div className={gridView?"gridcontainer":"listcontainer"}>
     {dataToDisplay.map((item,index)=>{
         return <Data key={index} detail={item} grid={gridView} />
        })}
    </div>
        </div>
  )
}
export default DisplayData;