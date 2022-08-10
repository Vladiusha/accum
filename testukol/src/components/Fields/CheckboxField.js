//@flow

import React, {useState} from 'react'
import styles from './Fields.module.css'
import classNames from "classnames";

type CheckboxFieldProps = {
    checked: boolean,
    styleClass: string
}

const CheckboxField = (props : CheckboxFieldProps) : Object => {
    const [value, setValue] = useState(props.checked)

    return (
        <input className={classNames(styles.textField, props.styleClass)} type='checkbox' defaultChecked={props.checked}
               value={value} onChange={e => setValue(e.target.value)}></input>
    )
}

export default CheckboxField;