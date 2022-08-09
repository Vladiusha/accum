import React, {useState} from 'react'
import styles from './Fields.module.css'
import classNames from "classnames";

const TextareaField = (props) => {
    const [value, setValue] = useState(props.value)

    return (<div className={classNames(styles.field, styles.textareaHeight)}>
        <label className={styles.label}>{props.label}</label>
        <div className={styles.textareaValue}>
                <textarea className={styles.textareaValueField}
                          value={value}
                          onChange={e => setValue(e.target.value)}
                          placeholder={props.placeholder}>

                </textarea>
        </div>
    </div>)
}

export default TextareaField;