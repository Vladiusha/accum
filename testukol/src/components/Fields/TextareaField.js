//@flow

import React, {useState} from 'react'
import styles from './Fields.module.css'
import classNames from "classnames";

type TextareaFieldProps = {
    styleClass: string,
    placeholder: string
}

const TextareaField = (props : TextareaFieldProps) : Object => {
    const [value, setValue] = useState('')
    const {styleClass, placeholder} = props

    return (
        <textarea className={classNames(styles.textareaField, styleClass)} value={value} onChange={e => setValue(e.target.value)}
                  placeholder={placeholder}></textarea>
    )
}

export default TextareaField;