import "./Table.css"

export default function Table({items, onSelect}) {
    return <table>
        <thead>
            <tr>
                <th>Task</th>
                <th>Assigned</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item, index) => 
                <tr key={index} onClick={() => onSelect(item)}>
                    <td>{item.task}</td>
                    <td>{item.assigned}</td>
                </tr>
            )}
        </tbody>
    </table>
}