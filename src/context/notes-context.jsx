import { createContext,useContext,useReducer } from "react";
import { notesReducer } from "../reducers/notesReducers";

export const NotesContext = createContext();

const NotesProvider = ({children}) => {
  const intialState = {
    title: "",
    text: "",
    notes: []
  };
  const [{ title, text, notes }, notesDispatch] = useReducer(
    notesReducer,
    intialState
  );
    return (
        <NotesContext.Provider value={{title,text,notes,notesDispatch}}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export {NotesProvider ,useNotes};
