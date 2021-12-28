import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../styles/Home.module.css'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

type NoteProps = {
    id: any,
    text: any,
    date: any,
    handleDelete: any,
    handleEdit: any,
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
            onClick={()=>handleEdit(id)}>
                <ListItemText primary={text} secondary={date} />
        </ListItem>
    )
}
export default NoteListItem