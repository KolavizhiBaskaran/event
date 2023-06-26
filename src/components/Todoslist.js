import React from 'react';

const TodosList = ({ todos, setTodos, setEditTodo }) => {

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  }
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));

  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <div className='list-container'>
            <div>

            <label>{todo.desc}</label>
            <label className={`list ${todo.completed ? "completed" : ""}`}>{todo.title}</label>
            </div>
            <div>
              <button className="button-complete task-button"
                onClick={() => handleComplete(todo)}>
                <i className="fa fa-check-circle"></i>
              </button>
              <button className="button-edit task-button"
                onClick={() => handleEdit(todo)}>
                <i className="fa fa-edit"></i>
              </button>
              <button className="button-delete task-button"
                onClick={() => handleDelete(todo)}>
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </li>
      )
      )}
    </div>);
};
export default TodosList;