import React, {useState} from "react";
import type { TodoItem } from "./types";
import { TodoList } from "./Components/TodosComponents";


const TodoApp = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [todo, setTodo] = useState("");

    const addTodo = (todo: string) => {
        setTodos([...todos, { name: todo, completed: false }]);
        setTodo("");
    };

    const markCompleted = (index: number, completed: boolean) => {
        setTodos(todos.map((todo, i) => i === index ? {...todo, completed: completed} : todo));
    };

    return (
        <>
            <TodoList addTodo={addTodo} markCompleted={markCompleted} setTodo={setTodo} todo={todo} todos={todos}/>
        </>
    );

}

export default TodoApp;