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
    const {styleClass, placeholder} = props

    return (
        <input className={classNames(styles.textField, styleClass)} type='text' value={value}
               onChange={e => setValue(e.target.value)} placeholder={placeholder}></input>
    )
}

export default TextField;