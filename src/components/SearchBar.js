import React from 'react';
import {Paper,TextField} from '@material-ui/core';

class SearchBar extends React.Component{
    handleChange=(event)=>{
        console.log(event.target.value)
        this.setState({searchTerm:event.target.value});
    }
    handleSubmit=(event)=>{
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;
        console.log(searchTerm)
        onFormSubmit(searchTerm);
        event.preventDefault(); //prevent refreshing
    }

    render(){
        return(
            <Paper elevation={6} style={{padding:'20px'}}>
                <form onSubmit={this.handleSumbit}>
                    <TextField fullWidth label="Search Here ->" onChange={this.handleChange}></TextField>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;