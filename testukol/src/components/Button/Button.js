//@flow

import React from 'react'
import styles from './Button.module.css'
import classNames from 'classnames'

type ButtonProps = {
    title: string,
    styleClass: string,
    onClick: Function
}

const Button = (props: ButtonProps) : Object => {
    const {title, styleClass, onClick} = props

    return (
        title && <button className={classNames(styles.customButton, styles.customButtonSize, styleClass)}
                              onClick={onClick}>
                {title}
            </button>

    )
}

export default Button;