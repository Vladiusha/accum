import React from 'react'
import styles from './Button.module.css'
import classNames from "classnames"

const Button = (props) => {

    return (
        <div className={classNames(styles.customButton, props.styleClass)} onClick={props.onClick}>
            {props.title}
        </div>
    )
}

export default Button;