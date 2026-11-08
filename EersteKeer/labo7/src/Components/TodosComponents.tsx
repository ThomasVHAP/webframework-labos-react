import type { TodoItemProps, TodoListProps, TodoNameProps } from "../types"


export const TodoName = ({todo, setTodo, addTodo} : TodoNameProps) => {
    return (
        <div>
            <input id="todo" type="text" value={todo} onChange={(event) => setTodo(event.target.value)}/>
            <button onClick={() => addTodo(todo)}>Add</button>
        </div>
    )
}

export const TodoItem = ({todos, markCompleted} : TodoItemProps) => {
    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index}>
                    <input type="checkbox" checked={todo.completed} onChange={(event) => markCompleted(index, event.target.checked)}/>
                    <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.name}</span>
                </div>
            ))}
        </div>
    )
}

export const TodoList = ({todo, todos, setTodo, addTodo, markCompleted} : TodoListProps) => {

    return (
        <div>
            <TodoName todo={todo} setTodo={setTodo} addTodo={addTodo}/>
            <TodoItem todos={todos} markCompleted={markCompleted}/>
        </div>
    )
}