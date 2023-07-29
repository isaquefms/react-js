import { useState } from 'react';
import './TextField.css';

const TextField = (props) => {

    const onInput = (event) => {
        props.setValue(event.target.value)
    }

    return (
        <div className="textfield">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={onInput} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField;