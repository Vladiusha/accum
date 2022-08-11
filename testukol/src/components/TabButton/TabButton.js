//@flow

import React from 'react'
import styles from './TabButton.module.css'
import classNames from "classnames";

type TabButtonProps = {
    styleClass: string,
    setActiveTab: Function,
    text: string
}

const TabButton = (props : TabButtonProps) : Object => {
    const {styleClass, setActiveTab, text} = props

    return (
        text && <div className={classNames(styles.tabButton, styleClass)} onClick={() => setActiveTab(text)}>
            {text}
        </div>
    )
}

export default TabButton;