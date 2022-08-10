//@flow

import React from 'react'
import styles from './Fields.module.css'
import classNames from "classnames";

type FieldProps = {
    label: string,
    value: Object
}

const Field = (props: FieldProps) : Object => (
            <div className={classNames(styles.field, styles.fieldStructure)}>
                <label className={styles.label}>{props.label}</label>
                {props.value}
            </div>
        )


export default Field;