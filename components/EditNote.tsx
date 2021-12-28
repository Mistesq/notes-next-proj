import { useState, useEffect } from 'react'
import { TextField, Button } from '@mui/material';
import { Note } from './../types/general';

type EditNoteProps = {
    handleEdit: (noteId:string, text:string) => void,
    handleDelete: (id:string) => void,
    note: Note
}

const EditNote = ({handleEdit, handleDelete, note}:EditNoteProps) => {
    const [noteText, setNoteText] = useState(note.text)
    const [idRemovalCandidate, setIdRemovalCandidate] = useState('')
    const [isNeedRemovalCandidate, setIsNeedRemovalCandidate] = useState(false)

    useEffect(()=>{
        if(isNeedRemovalCandidate) {
            handleDelete(idRemovalCandidate)
        }
		setNoteText(note.text)
	},[note])

    const characterLimit = 1000
    const handleChange = (event:any) => {
        if(characterLimit - event.target.value.length >=0)
        {
            const value = event.target.value
            setNoteText(value)
            handleEdit(note.id, value )
            if(value.length === 0) {
                setIdRemovalCandidate(note.id)
                setIsNeedRemovalCandidate(true)
            }

            if(idRemovalCandidate && note.id == idRemovalCandidate && value.length > 0) {
                setIsNeedRemovalCandidate(false)
            }
        }
    }
    return(
        <div className="note new">
            <TextField
                id="outlined-multiline-static"
                label="Edit note"
                fullWidth
                multiline
                rows={4}
                value={noteText}
                onChange={handleChange}
            />
            <div className="note-footer">
                <small>{characterLimit - noteText.length} remaining</small>
            </div>
        </div>
    )   
}
export default EditNote