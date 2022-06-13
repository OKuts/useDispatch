import {useContext} from "react";
import {TodoContext} from "../state";

export const TodoItem = ({todo}) => {
    const {dispatchTodo} = useContext(TodoContext)

    return (
        <div className={'todo'}>
            <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={() =>
                    dispatchTodo({type: 'updateIsComplete', payload: {id: todo.id}})
                }
            />
            <input value={todo.text} onChange={(e) =>
                dispatchTodo({type: 'update', payload: {id: todo.id, text: e.target.value}})
            }></input>
            <button onClick={() =>
                dispatchTodo({type: 'delete', payload: {id: todo.id}})}>Delete</button>
        </div>
    )
}
