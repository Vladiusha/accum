//@flow

import React, {useState} from 'react'
import styles from './Fields.module.css'
import classNames from "classnames";

type TextFieldProps = {
    styleClass: string,
    placeholder: string
}

const TextField = (props : TextFieldProps) : Object => {
    const [value, setValue] = useState('')

    return (
        <input className={classNames(styles.textField, props.styleClass)} type='text' value={value}
               onChange={e => setValue(e.target.value)} placeholder={props.placeholder}></input>
    )
}

export default TextField;