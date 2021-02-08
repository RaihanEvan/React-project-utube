import React from 'react';
import {useState} from 'react';
import { Button, Paper, TextField } from '@material-ui/core';

// class SearchBar extends React.Component{
//     handleChange=(event)=>{
//         console.log(event.target.value)
//         this.setState({searchTerm:event.target.value});
//     }
//     handleSubmit=(event)=>{
//         const {searchTerm} = this.state;
//         const {onFormSubmit} = this.props;
//         console.log(searchTerm)
//         onFormSubmit(searchTerm);
//         event.preventDefault(); //prevent refreshing
//     }

const SearchBar = ({onSubmit}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) => setSearchTerm(event.target.value);
    const onKeyPress = (event)=>{
        if(event.key === "Enter"){
            onSubmit(searchTerm);
        }
    }
        return (
            <React.Fragment>
                <Paper elevation={6} variant="outlined" style={{ padding: '20px' }}>
                    <TextField fullWidth label="Search Here ->" onChange={handleChange} onKeyPress={onKeyPress} value={searchTerm}><Button/></TextField>
            </Paper>
            <Button>(?-?)</Button>
            </React.Fragment>
            
        );
    }


export default SearchBar;