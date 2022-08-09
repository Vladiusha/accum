import React, {useState} from 'react'
import styles from './Fields.module.css'
import classNames from "classnames";

const InputField = (props) => {
    const [value, setValue] = useState(props.value)

    return (
        <div className={classNames(styles.field, styles.numericFieldHeight)}>
            <div className={styles.label}>{props.label}</div>
            <div className={styles.value}>
                <input className={styles.valueField}
                       type={props.type}
                       value={value}
                       onChange={e => setValue(e.target.value)}
                       placeholder={props.placeholder}
                ></input>
            </div>
        </div>
    )
}

export default InputField;