import { useEffect } from 'react'
import NoteListItem from "./NoteListItem"
import styles from '../styles/Home.module.css'
import { List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

type propsNoteList = {
    notes: any,
    handleEdit: any,
    handleDelete: any,
    currentNoteId: string
}

const Noteslist = ({notes,handleEdit,handleDelete, currentNoteId}:propsNoteList) => {
    useEffect(()=>{
		localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
	},[notes])

    return(
        <div className="notes-list">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                notes.map((note:any)=> {
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