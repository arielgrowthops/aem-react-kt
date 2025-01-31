const TodoItem = ({ task, onRemove }) => {
    return (
        <li>
            {task} <button onClick={onRemove}>Remove</button>
        </li>
    );
};

export default TodoItem;