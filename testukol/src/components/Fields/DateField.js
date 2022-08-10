//@flow

import React, {useState} from 'react'
import styles from './Fields.module.css'
import classNames from "classnames";

type DateFieldProps = {
    value: string,
    styleClass: string
}

const DateField = (props : DateFieldProps) : Object => {
    const [value, setValue] = useState(props.value)

    return (
        <input className={classNames(styles.textField, props.styleClass)} type='date' value={value}
               onChange={e => setValue(e.target.value)}></input>
    )
}

export default DateField;