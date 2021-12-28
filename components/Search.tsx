
import React from "react"
import styles from '../styles/Home.module.css'
import { TextField } from '@mui/material';

const Search = ({handleSearchNote}:any) => {
    return(
				<TextField 
					label="Search" 
					variant="standard"
					onChange={(event) =>
						handleSearchNote(event.target.value)
					} 
				/>
    )
}
export default Search