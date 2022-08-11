//@flow

import React, {useState} from 'react'
import styles from './Fields.module.css'
import classNames from "classnames";

type CheckboxFieldProps = {
    checked: boolean,
    styleClass: string
}

const CheckboxField = (props : CheckboxFieldProps) : Object => {
    const {checked, styleClass} = props
    const [value, setValue] = useState(checked)

    return (
        <input className={classNames(styles.textField, styleClass)} type='checkbox' defaultChecked={checked}
               value={value} onChange={e => setValue(e.target.value)}></input>
    )
}

export default CheckboxField;