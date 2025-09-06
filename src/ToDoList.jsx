import { useState } from "react";
import { HiArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi";

function ToDoList() {

    const [tasks, setTasks] = useState(["walk dog", "feed cow"]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleAddTask = () => {
         if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
            
        } else {
            alert("enter some task");
        }
    }

    const handleRemoveTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    const handleMoveUp = (index) => {
        if(index === 0) {
            alert("it is first task");
            return;
        }

        const MoveUp = [...tasks];

        [MoveUp[index - 1], MoveUp[index]] = [MoveUp[index], MoveUp[index - 1]];

        setTasks(MoveUp);
    }

    const handleMoveDown = (index) => {
        if(index === tasks.length - 1) {
            alert("it is the last task");
            return;
        }

        const MoveDown = [...tasks];

        [MoveDown[index], MoveDown[index + 1]] = [MoveDown[index + 1], MoveDown[index]];

        setTasks(MoveDown);

    }

    return (
        <>
            <div className="divContainer flex flex-col justify-center items-center gap-5 bg-amber-100 ml-[25%] mr-[25%] rounded p-5">

                <h1 className="text-4xl font-semibold text-amber-900 bg-amber-300 p-2 pl-5 pr-5 rounded">TO DO LIST</h1>
                <div className="flex gap-5">
                    <input type="text" className=" p-2 rounded bg-amber-50 hover:bg-white" placeholder="Your tasks..." onChange={handleInputChange} value={newTask}/>
                    <button className="p-2 w-20 rounded bg-amber-300 hover:bg-amber-200 cursor-pointer" onClick={handleAddTask}>Add</button>
                </div>
                <ul className="flex flex-col gap-5">
                    {tasks.map((task, index) =>
                        <li key={index} className="flex gap-10"> 
                            <span className="bg-amber-300 w-2xs text-center p-2 rounded">{task}</span>
                            <div className="flex items-center gap-2">
                                <button className=" p-2 rounded-2xl bg-amber-700 hover:bg-amber-600 cursor-pointer" onClick={() => handleRemoveTask(index)}>Delete</button>
                                <button className=" p-3 rounded-2xl bg-amber-600 hover:bg-amber-500 cursor-pointer" onClick={() => handleMoveUp(index)}><HiArrowNarrowUp /></button>
                                <button className=" p-3 rounded-2xl bg-amber-600 hover:bg-amber-500 cursor-pointer" onClick={() => handleMoveDown(index)}><HiArrowNarrowDown /></button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
}

export default ToDoList;
