import React,{useState} from "react";

function Todolsit(){
    const [task,setTask]=useState([]);
    const [newtask,setnewTask]=useState("");

    function handleinputchange(e){
        setnewTask(e.target.value);
    }
    function updateTask(){
        if(newtask.trim()!==""){
            setTask(t=>[...task,newtask]);
            setnewTask("");
        }
    }
    function delettask(index){
        const updatedtask = task.filter((_,i) =>i !==index);
        setTask(updatedtask)
    }
    function movetaskup(index){
        if(index>0){
            const updatedTask=[...task];
            [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
            setTask(updatedTask);
        }
    }
    function movetaskdown(index){
        if(index<task.length-1){
            const updatedTask=[...task];
            [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]];
            setTask(updatedTask);
        }
    }
    return(
        <>
        <div className="todolsit">
            <h1>To Do list</h1>
            <div>
            <input type="text"  
            id="taskip"     
            placeholder="enter a task" value={newtask} onChange={handleinputchange}/>
            <button className="add-btn" onClick={updateTask}>Add-Task</button>
            </div>

            <ol>
                {
                     task.map((task,index)=>
                        <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delettask" onClick={()=>delettask(index)}>Deleat</button>
                        <button className="move" onClick={()=> movetaskup(index)}>👆</button>
                        <button className="move" onClick={()=>movetaskdown(index)}>👇</button>
                    </li>
                   )
                }
            </ol>
        </div>
        </>
    );
}


export default Todolsit