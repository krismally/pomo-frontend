import { Link } from "react-router-dom";

const ListDone = (props) => {
    return (
        <div className="listToDo">
            <h1 className="done-head"><Link to="/lists" className="todo-link"><span >To Do</span></Link> Done</h1>
            {/* 1. Display Checked off list items
            2. Display Items by order finished and Date completed
            3. Give the user the ability to make a note. */}
            <form>
                <ul>
                    <li> Task 1 </li>
                </ul>
                
                
            </form>
        </div>
    );
}

export default ListDone;