import React, { useState } from 'react';
import { Validation } from './util/validation';
import TextField from '@material-ui/core/TextField';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';


const TranslateContainer = (props) => {
    //hooks definition
    const [source, setSource] = useState({ value: '', type: 'only-letters' });
    const [target, setTarget] = useState('');

    const onChangeHandler = event => {
        if (Validation(event.target.value, source.type))
            setSource({ value: event.target.value, type: 'only-letters' });
    };

    const onClickButton = () => {
        console.log('Button clicked');
    }

    const generateResult = (element) => {
        if (target !== null && target !== '') {
            return target.map((value) => {
                React.cloneElement(element, {
                    key: value,
                })
            })
        }
    }

    return <>
        <div className='translate-container'>
            <TextField
                name='source'
                id="standard-basic"
                label="Word"
                value={source.value}
                onChange={onChangeHandler}
            />
            <br></br>
            <Button
                variant="contained"
                color="primary"
                onClick={onClickButton}
                type='button'
            >
                TRANSLATE
        </Button>
            <br></br><br></br>
            <p>Result:</p>
            <List>
                {generateResult(
                <ListItem>
                    <ListItemText
                        primary='Single-line item'
                        secondary='Secondary text'
                    />
                </ListItem>
                )}
            </List>
        </div>
    </>
}

export default TranslateContainer;