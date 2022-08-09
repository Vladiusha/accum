import React, {useState} from 'react'
import styles from './Fields.module.css'
import classNames from "classnames";

const NumberField = (props) => {
    const [value, setValue] = useState(props.value)

    return (
        <input className={classNames(styles.textField, props.styleClass)} type='number' value={value}
               onChange={e => setValue(e.target.value)}
               placeholder={props.placeholder}></input>
    )
}

export default NumberField;