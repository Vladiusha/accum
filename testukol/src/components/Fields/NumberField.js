//@flow

import React, {useState} from 'react'
import styles from './Fields.module.css'
import classNames from "classnames";

type NumberFieldProps = {
    value: number,
    styleClass: string
}

const NumberField = (props : NumberFieldProps) : Object => {
    const [value, setValue] = useState(props.value)

    return (
        <input className={classNames(styles.textField, props.styleClass)} type='number' value={value}
               onChange={e => setValue(e.target.value)}></input>
    )
}

export default NumberField;