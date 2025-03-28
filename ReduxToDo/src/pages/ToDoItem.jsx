import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleComplete } from "../redux/ToDoSlice";
import { deleteToDo } from "../redux/ToDoSlice";

function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(
      toggleComplete({
        id: id,
        completed: !completed,
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteToDo({
        id: id,
    }))
  }

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3 form-check-input"
            checked={completed}
            onChange={handleComplete}
          ></input>
          {title}
        </span>
        <button className="btn btn-danger" onClick={handleDelete}>
          <FontAwesomeIcon className="icon" icon={faX} size="xs" />
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
