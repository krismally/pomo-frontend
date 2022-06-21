import { Link } from "react-router-dom";

const ListToDo = (props) => {
    return (
        <div className="listToDo">
            <h1>To Do <Link to="/lists/done"><span>Done</span></Link></h1>
            <form>
                <ul>
                    <li><input type="checkbox" />Task 1 <button>Edit</button></li>
                </ul>
                <input type="text" placeholder="type new list item"/>
                <button>+</button>
            </form>
        </div>

    );
}

export default ListToDo;