import { Link } from "react-router-dom";

const ListDone = (props) => {
    return (
        <div className="listToDo">
            <h1 className="done-head"><Link to="/lists"  style={{ textDecoration: 'none' }}><span className="todo-link" >To Do</span></Link> Done</h1>
            <form>
                <ul>
                    <li className="dummy-done"> Task 1 </li>
                    <li className="dummy-done"> Task 2 </li>
                    <li className="dummy-done"> Task 3 </li>
                    <li className="dummy-done"> Task 4 </li>
                    <li className="dummy-done"> Task 5 </li>
                    <li className="dummy-done"> Task 6 </li>
                </ul>
                
                
            </form>
        </div>
    );
}

export default ListDone;