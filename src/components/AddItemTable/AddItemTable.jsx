import "./AddItemTable.css"
import { useRef } from "react"


export default function AddItemTable({ onSelect }) {
    const task = useRef();
    const assigned = useRef();

    function handleOnSelect() {
        if (task.current.value.trim() !== "" && assigned.current.value.trim() !== "") {
            onSelect(task.current.value ,assigned.current.value);
            task.current.value = "";
            assigned.current.value = "";
        }
    }

    return <div className="fields">
        <input ref={task} type="text" placeholder="task" maxLength={27}/>
        <input ref={assigned} type="text" placeholder="assigned" maxLength={27}/>
        <button onClick={handleOnSelect}>Add</button>
    </div>
}