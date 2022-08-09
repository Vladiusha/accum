import React from 'react'
import styles from './TabButton.module.css'
import classNames from "classnames";

const TabButton = (props) => {
    return (
        <div className={classNames(styles.tabButton, props.styleClass)} onClick={() => props.setActiveTab(props.text)}>
            {props.text}
        </div>
    )
}

export default TabButton;