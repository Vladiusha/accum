import React from 'react'
import styles from './Button.module.css'
import classNames from "classnames"

const Button = (props) => {

    return (
        <button className={classNames(styles.customButton, styles.customButtonSize, props.styleClass)} onClick={props.onClick}>
            {props.title}
        </button>
    )
}

export default Button;