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

    return (
        <textarea className={classNames(styles.textareaField, props.styleClass)} value={value} onChange={e => setValue(e.target.value)}
                  placeholder={props.placeholder}></textarea>
    )
}

export default TextareaField;