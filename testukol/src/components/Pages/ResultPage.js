import React, {useEffect, useState} from 'react'
import Field from "../Fields/Field";
import TextareaField from "../Fields/TextareaField";
import ButtonsField from "../Fields/ButtonsField";
import styles from "../Fields/Fields.module.css";
import TextField from "../Fields/TextField";
import NumberField from "../Fields/NumberField";
import CheckboxField from "../Fields/CheckboxField";
import DateField from "../Fields/DateField";

const ResultPage = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        let fields = props.data.map(el => {
            if (el.type === 'text') {
                return <Field label={el.labelText} value={
                    <TextField styleClass={styles.value} placeholder={el.placeholder}/>
                }/>
            } else if (el.type === 'number') {
                return <Field label={el.labelText} value={
                    <NumberField styleClass={styles.value} value={el.value}/>
                }/>
            } else if (el.type === 'checkbox') {
                return <Field label={el.labelText} value={
                    <CheckboxField styleClass={styles.value} checked={el.checked}/>
                }/>
            } else if (el.type === 'date') {
                return <Field label={el.labelText} value={
                    <DateField styleClass={styles.value} value={el.value}/>
                }/>
            } else if (el.type === 'textarea') {
                return <Field label={el.labelText} value={
                    <TextareaField styleClass={styles.value} placeholder={el.placeholder}/>
                }/>
            } else if (Array.isArray(el)) {
                return <ButtonsField data={el}/>
            }
            return undefined
        })
        setData(fields)
    }, [props.data])

    return (
        <div id='resultPage'>
            {data}
        </div>
    )
}

export default ResultPage;