import { Link } from "react-router-dom";

const ListToDo = (props) => {
    return (
        <div className="listToDo">
            <form>
                <h2 className="listNav">
                    <span className="todo">To Do</span> 
                    <span className="done"> 
                        <Link to="list/done">Done</Link>
                        </span>
                </h2>
                <input type="checkbox">Task 1</input>
                {/* need logic */}
            </form>
        </div>

    );
}

export default ListToDo;