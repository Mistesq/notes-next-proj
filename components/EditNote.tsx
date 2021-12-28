import { useState } from 'react'
import { TextField, Button } from '@mui/material';
import styles from '../styles/Home.module.css'

type EditNoteProps = {
    handleSave: any,
    handleEdit: any,
    handleDelete: any,
    note: any
}

const EditNote = ({handleSave, handleEdit, handleDelete, note}:EditNoteProps) => {
    console.log('setNoteText', note)
    const [noteText, setNoteText] = useState(note.text)
    const characterLimit = 1000
    const handleChange = (event:any) => {
        if(characterLimit - event.target.value.length >=0)
        {
            setNoteText(event.target.value)
        }
    }
    const handleSubmit = () => {
        if(noteText.trim().length>0){
            handleSave(noteText)
            setNoteText('')
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
                defaultValue="Default Value"
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