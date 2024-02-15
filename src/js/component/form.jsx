import React,{ useState } from "react";

const Form = () => {
    const [Task,setTask]= useState("");
    const [List,setList]= useState([]);



function sumbitTask(e){
    
        if (e.key === "Enter"){
            setList(List.concat(Task))
            setTask("")
            console.log(Task);
        }
    
}


 return(
    <>
     
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Formulario Controlado</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setTask(e.target.value)} onKeyDown={sumbitTask } value={Task}/>
      </div>
      <ul>
      {List.map((item, index) => (
            <li key={index}>{item} <a href="#" className="eliminar"  onClick={()=> setList(List.filter((item,myIndex)=> index !== myIndex ))}>x</a></li>
           
          ))}
      </ul>
    
    </>
    )
    
}



export default Form















