import { Link } from "react-router-dom";

const ListDone = (props) => {
    return (
        <div className="listToDo">
            <h1 className="done-head"><Link to="/lists" className="todo-link"><span >To Do</span></Link> Done</h1>
            <form>
                <ul>
                    <li> Task 1 </li>
                </ul>
                
                
            </form>
        </div>
    );
}

export default ListDone;