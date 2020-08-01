import React, { useState } from 'react';
import {Validation} from './util/validation';

const TranslateContainer = (props) => {
    //hooks definition
    const [source, setSource] = useState({value:'', type:'only-letters'});

    
    const onChangeHandler = event => {
        console.log(Validation(event.target.value, source.type));
        setSource({value:event.target.value, type:'only-letters'});
      };

    return <>
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            value={source.value}
      />
    </>
}

export default TranslateContainer;