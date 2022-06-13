import './styles/App.css';
import {todoReducer, TodoContext} from '../state'
import {useReducer} from "react";
import {TextInput} from "./TextInput";
import {TodoList} from "./TodoList";

function App() {
    const [todoState, dispatchTodo] = useReducer(todoReducer, [{
        id: 1,
        text: 'Lorem',
        isComplete: false
    }])
    return (
        <TodoContext.Provider value={{todoState, dispatchTodo}}>
            <div className="wrap">
                <TodoList />
                <TextInput />
            </div>

        </TodoContext.Provider>
    )
}

export default App;
