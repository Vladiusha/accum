//@flow

import React from 'react'
import styles from './Button.module.css'
import classNames from 'classnames'

type ButtonProps = {
    title: string,
    styleClass: string,
    onClick: Function
}

const Button = (props: ButtonProps) : Object => (
        <button className={classNames(styles.customButton, styles.customButtonSize, props.styleClass)} onClick={props.onClick}>
            {props.title}
        </button>
    )


export default Button;