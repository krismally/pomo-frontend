import { Link } from "react-router-dom";
import ToDoForm from "./ToDoForm";

const ListToDo = (props) => {
    return (
        <div className="listToDo">
            <h1>To Do <Link to="/lists/done"><span>Done</span></Link></h1>
            <ToDoForm />
        </div>

    );
}

export default ListToDo;