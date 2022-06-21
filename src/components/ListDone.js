import { Link } from "react-router-dom";

const ListDone = (props) => {
    return (
        <div className="listToDo">
            <h1><Link to="/lists"><span>To Do</span></Link> Done</h1>
            {/* 1. Display Checked off list items
            2. Display Items by order finished and Date completed
            3. Give the user the ability to make a note. */}
            <form>
                <ul>
                    <li> <input type="checkbox" /> Task 1 <input type="text" placeholder="Add Note"/><button><ion-icon name="add-circle-outline"></ion-icon></button></li>
                </ul>
                
                
            </form>
        </div>
    );
}

export default ListDone;