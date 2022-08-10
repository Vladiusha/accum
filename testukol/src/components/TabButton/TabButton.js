//@flow

import React from 'react'
import styles from './TabButton.module.css'
import classNames from "classnames";

type TabButtonProps = {
    styleClass: string,
    setActiveTab: Function,
    text: string
}

const TabButton = (props : TabButtonProps) : Object => (
        <div className={classNames(styles.tabButton, props.styleClass)} onClick={() => props.setActiveTab(props.text)}>
            {props.text}
        </div>
    )

export default TabButton;