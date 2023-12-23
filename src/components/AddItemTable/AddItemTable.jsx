import "./AddItemTable.css"
import { useState } from "react"


export default function AddItemTable({ onSelect }) {
    const [item, SetItem] = useState({task: "", assigned: ""})

    function handleOnChange(atribute, newValue) {
        SetItem((prevItem) => {
            return {
              ...prevItem,
              [atribute]: newValue,
            }
        });
    }

    function handleOnSelect() {
        if (item.task != "" && item.assigned != "") {
            onSelect(item)
        }
    }

    return <div className="fields">
        <input onChange={(event) => {handleOnChange("task", event.target.value)}} type="text" placeholder="task" maxLength={27}/>
        <input onChange={(event) => {handleOnChange("assigned", event.target.value)}} type="text" placeholder="assigned" maxLength={27}/>
        <button onClick={handleOnSelect}>Add</button>
    </div>
}