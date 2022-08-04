import React from 'react'
import { useState } from 'react'

const Workstodo = () => {
    const [Works,setWorks]=useState("");
    const [Workstodo,setWorkstodo]=useState([]);
    const [editingat,seteditingat]=useState();
    const handlechange=(event)=>{
        const value=event.target.value;
        setWorks(value)
    }
    const handlesubmit=()=>{
        const x=[...Workstodo,Works]
        setWorkstodo(x);
        setWorks("");
    }
    const handleedit=(event,index)=>{
        seteditingat(index);
        const y=Workstodo[index];
        setWorks(y)
    }
  return (
    <>
    <h1>Workstodo</h1>
    <div>
        <input type="text" value={Works} onChange={handlechange}/>
        <button type="button" className="btn btn-danger" onClick={handlesubmit}>Submit</button>
    </div>
    <div className='anil'>
    <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">si</th>
      <th scope="col">WORKS TO DO</th>
      <th scope="col">Actions</th>
      
    </tr>
  </thead>
  <tbody>
    {
        Workstodo.map((value,index)=>{
            return(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{value}</td>
                <td>
                    <button onClick={(event)=>{handleedit(event,index)}}>edit</button>
                    <button>delete</button>
                </td>
            </tr>
        )})
    }
    
  </tbody>
</table>
    </div>
    </>
  )
}

export default Workstodo