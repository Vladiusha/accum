import React from 'react'
import styles from './Fields.module.css'
import classNames from "classnames";

const Field = (props) => (
            <div className={classNames(styles.field, styles.fieldStructure)}>
                <label className={styles.label}>{props.label}</label>
                {props.value}
            </div>
        )


export default Field;