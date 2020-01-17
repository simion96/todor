import React from 'react';
import Button from '@material-ui/core/Button';
import OutlinedInput  from '@material-ui/core/OutlinedInput';
import classes from './TaskInput.module.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    inputElement = <OutlinedInput  
        className={classes.TextInput}
        fullWidth={true}
        id="task-input" 
        placeholder="Start typing task..."

        value={props.value}
        onKeyDown={(e)=> props.onChange(e)} />;

    
    return (
        <div>
            {inputElement}
        </div>
    )

}

export default input;