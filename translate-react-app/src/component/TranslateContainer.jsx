import React, { useState } from 'react';
import { Validation } from './util/validation';
import {TextField, Button, List, ListItem, ListItemText, InputLabel, Select, MenuItem } from '@material-ui/core';
import {languages} from './util/constant';


const TranslateContainer = (props) => {
    //hooks definition
    const [source, setSource] = useState({ value: '', type: 'only-letters' });
    const [sourceLanguage, setSourceLanguage] = useState('');
    
    const [targetLanguage, setTargetLanguage] = useState('');
    const [target, setTarget] = useState('');

    const onChangeHandler = event => {
        if (Validation(event.target.value, source.type))
            setSource({ value: event.target.value, type: 'only-letters' });
    }

    const handleSourceLanguageChange = (event) => {
        setSourceLanguage(event.target.value);
    }

    const handleSourceLanguageTargetChange = (event) => {
        setTargetLanguage(event.target.value);
    }

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

    const generateItemSource = () => {
      
    }

    return <>
        <div className='translate-container'>
            <TextField
                name='source'
                id="standard-basic"
                label="Word"
                value={source.value}
                onChange={onChangeHandler}
            /><br></br>
            <InputLabel id="word-lang-label">Word language</InputLabel>
            <Select
                labelId="word-lang-label"
                id="word-lang-select"
                value={sourceLanguage}
                onChange={handleSourceLanguageChange}
            >
            { languages.map((lang) =>{
           return <MenuItem value={lang}> {lang}</MenuItem>
            })}
            </Select>
            <br></br><br></br>
            <InputLabel id="word-lang-label-target">Translate to:</InputLabel>
            <Select
                labelId="word-lang-label-target"
                id="word-lang-select-target"
                value={targetLanguage}
                onChange={handleSourceLanguageTargetChange}
            >
            { languages.map((lang) =>{
           return <MenuItem value={lang}> {lang}</MenuItem>
            })}
            </Select>
            <br></br><br></br>


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