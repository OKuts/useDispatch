import {useContext} from "react";
import {TodoContext} from "../state";
import {TodoItem} from "./TodoItem";

export const TodoList = () => {
    const {todoState} = useContext(TodoContext)
    return (
        <div className={'todo-list'}>
            {todoState.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
        </div>
    )
}
