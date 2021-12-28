import { IconButton, ListItemButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

type NoteProps = {
    id: string,
    text: string,
    date: string,
    handleDelete: (id:string) => void,
    handleEdit: (id:string) => void,
    currentNoteId: string
}

const NoteListItem = ({id,text,date,handleDelete, handleEdit, currentNoteId}:NoteProps) => {
    return(
        <ListItem
            selected={id === currentNoteId ? true : false}
            secondaryAction={
                <IconButton aria-label="delete">
                <DeleteIcon  onClick={()=>handleDelete(id)} />
                </IconButton>
            }
           >
                <ListItemButton  onClick={()=>handleEdit(id)}>
                    <ListItemText primary={text} secondary={date} />
                </ListItemButton>
        </ListItem>
    )
}
export default NoteListItem