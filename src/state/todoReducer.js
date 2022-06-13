import {v4 as uuid} from 'uuid'

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'add': {
            const {text}= action.payload
            return [
                ...state,
                {
                    id: uuid(),
                    text,
                    isComplete: false,
                }
            ]
        }
        case 'delete': {
            const {id}= action.payload
            return state.filter( todo => todo.id !== id)
        }
        case 'update': {
            const {id, text}= action.payload
            return state.map( todo => todo.id === id ? {...todo, text} : todo)
        }
        case 'updateIsComplete': {
            const {id}= action.payload
            return state.map( todo => todo.id === id ? {...todo, isComplete: !todo.isComplete } : todo)
        }
        default: console.log('Unknown action');
    }
}
