import React, {useEffect, useState} from 'react'
import InputField from "../fields/InputField";
import TextareaField from "../fields/TextareaField";
import ButtonsField from "../fields/ButtonsField";

const ResultPage = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        let fields = props.data.map(el => {
            if (el.type === 'textarea') {
                return <TextareaField label={el.labelText} value={el.value} placeholder={el.placeholder}/>
            } else if (Array.isArray(el)) {
                return <ButtonsField data={el}/>
            }
            return <InputField label={el.labelText} type={el.type} value={el.value} placeholder={el.placeholder}/>
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