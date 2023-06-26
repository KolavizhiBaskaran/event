import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ inputTitle, setInputTitle, inputDesc, setInputDesc, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const updateTodo = (title, desc, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, desc, id, completed } : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };

    useEffect(() => {
        if (editTodo) {
            setInputTitle(editTodo.title);
            setInputDesc(editTodo.desc);
        } else {
            setInputTitle("")
            setInputDesc("")
        }
    }, [setInputTitle, setInputDesc, editTodo]);

    const handleInputTitle = (e) => {
        setInputTitle(e.target.value);
    };
    const handleInputdesc = (e) => {
        setInputDesc(e.target.value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: inputTitle, desc: inputDesc, completed: false }]);
            setInputTitle("");
            setInputDesc("");
        } else {
            updateTodo(inputTitle, inputDesc, editTodo.id, editTodo.completed)
        }
    };

    return (

        <form onSubmit={onFormSubmit}>
            
            <input type="text" placeholder="Enter a Event..." className="task-input"
                required
                onChange={handleInputTitle}
                value={inputTitle}
            />
             <button className="button-add" type="submit">
                {editTodo ? "OK" : "Add"}
            </button>
        </form>
    );
};

export default Form;