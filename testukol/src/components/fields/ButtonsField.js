import React, {useState, useEffect} from 'react'
import styles from './Fields.module.css'
import Button from "../button/Button";


const ButtonsField = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        let buttons = props.data.map(el => {
            if (el.type === 'button')
                return <Button title={el.buttonText} styleClass={styles.buttonsFieldMargin}/>
            return undefined
        })
        setData(buttons)
    }, [props.data])

    return (
        <div className={styles.buttonsField}>
            {data}
        </div>
    )
}

export default ButtonsField;