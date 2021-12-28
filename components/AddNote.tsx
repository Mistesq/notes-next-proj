import { useState } from 'react'
import { TextField, Button, Box } from '@mui/material';

type AddNoteProps = {
    handleSave: (text:string) => void
}

const AddNote = ({handleSave}:AddNoteProps) => {
    const [noteText, setnoteText] = useState('')
    const characterLimit = 1000
    const handleChange = (event:any) => {
        if(characterLimit - event.target.value.length >=0)
        {
            setnoteText(event.target.value)
        }
    }
    const handleSubmit = () => {
        if(noteText.trim().length>0){
            handleSave(noteText)
            setnoteText('')
        }
    }
    return(
        <div className="note new">
            <TextField
                id="outlined-multiline-static"
                label="Add note"
                fullWidth
                multiline
                rows={4}
                defaultValue="Default Value"
                value={noteText}
                onChange={handleChange}
            />
           <Box sx={{ 
            display: 'flex', 
            alignItems: 'baseline', 
            justifyContent: 'space-between',
            my: 1.5
            }}>
                <small>{characterLimit - noteText.length} remaining</small>
                <Button variant="contained" onClick={handleSubmit}>Save</Button>
            </Box>
        </div>
    )   
}
export default AddNote