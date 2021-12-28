
import React from "react"
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