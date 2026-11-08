export interface TodoItem { 
    name: string;
    completed: boolean;
}

export interface TodoListProps {
    todos: TodoItem[]
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    addTodo: (todo: string) => void
    markCompleted: (index: number, completed: boolean) => void
}

export interface TodoNameProps {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    addTodo: (todo: string) => void
}

export interface TodoItemProps {
    todos: TodoItem[]
    markCompleted: (index: number, completed: boolean) => void
}