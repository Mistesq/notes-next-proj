import { useEffect } from 'react'
import NoteListItem from "./NoteListItem"
import { List } from '@mui/material';
import { Note } from './../types/general';

type propsNoteList = {
    notes: Array<Note>,
    handleEdit: (id:string) => void,
    handleDelete: (id:string) => void,
    currentNoteId: string
}

const Noteslist = ({notes,handleEdit,handleDelete, currentNoteId}:propsNoteList) => {
    useEffect(()=>{
        console.log('local storage set')
        if(notes.length > 1) {
            localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
        }
	},[notes])

    return(
        <div className="notes-list">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {notes.map((note:any)=> {
                    return <NoteListItem
                                currentNoteId={currentNoteId}
                                id={note.id} 
                                key={note.id} 
                                text={note.text} 
                                date={note.date} 
                                handleEdit={handleEdit} 
                                handleDelete={handleDelete} 
                            />
                })
            }
            </List>
        </div>
    )
}
export default Noteslist