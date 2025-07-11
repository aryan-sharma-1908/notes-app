import {v4 as uuid} from 'uuid'
export const notesReducer = (state,{type,payload}) => {
    switch(type) {
        case "ADD_NOTE":
            return ({
                ...state,
                notes : [...state.notes,{title : state.title,text : state.text, id : uuid(), isPinned : false, isArchived : false, isDeleted : false, isImportant : false}],
        })
        case "TITLE":
            return ({
                ...state,
                title : payload
            })
        case "TEXT":
            return ({
                ...state,
                text : payload
            })
        case "CLEAR_INPUT":
            return ({
                ...state,
                title : '',
                text : ''
            })
        case "PIN/UNPIN":
            return ({
                ...state,
                notes : state.notes.map(note => note.id === payload ? {...note, isPinned : !note.isPinned} : note)
            })
        case "ADD_TO_ARCHIVE":
            return ({
                ...state,
                notes : state.notes.map(note => note.id === payload ? {...note, isArchived : !note.isArchived} : note)
            })
        case "DELETE_NOTE":
            return ({
                ...state,
                notes: state.notes.map(note => note.id === payload ? {...note, isDeleted : !note.isDeleted} : note)
            })
        case "TOGGLE_IMPORTANT":
            return ({
                ...state,
                notes: state.notes.map(note => note.id === payload ? {...note, isImportant : !note.isImportant} : note)
            })
        case "PERMANENT_DELETE":
            return ({
                ...state,
                notes: state.notes.filter(note => note.id !== payload )
            })
        default:
            return state;
    }
}