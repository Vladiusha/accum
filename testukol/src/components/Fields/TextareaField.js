import React, {useState} from 'react'
import styles from './Fields.module.css'
import classNames from "classnames";

const TextareaField = (props) => {
    const [value, setValue] = useState(props.value)

    return (
        <textarea className={classNames(styles.textareaField, props.styleClass)} value={value} onChange={e => setValue(e.target.value)}
                  placeholder={props.placeholder}></textarea>
    )
}

export default TextareaField;