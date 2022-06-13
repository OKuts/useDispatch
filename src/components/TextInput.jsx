import {useContext, useState} from "react";
import {TodoContext} from "../state";

export const TextInput = () => {
    const {dispatchTodo} = useContext(TodoContext)
    const [text, setText] = useState('')

    return (
        <div className={'text'}>
            <p>Text</p>
            <input
                type="text"
                value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => dispatchTodo({type: 'add', payload: {text}})}>Submit</button>
        </div>
    )
}
