import React, {useState} from 'react'
import Button from "../button/Button";
import buttonStyles from '../button/Button.module.css'
import {validateJson} from '../../utils/jsonUtils'
import {configSetUp, textareaConfigTabPlaceholder} from "../../constants";

const ConfigPage = (props) => {
    const [configText, setConfigText] = useState("")

    const configApply = () => {
        const result = validateJson(configText)
        if (!result.success) return
        props.setData(result.json)
        alert(configSetUp)
    }

    return (
        <div id='configPage'>
            <div id='configHelpText'>
                Please set your own config or go with initial one!
            </div>
            <div id='configTextareaWrapper'>
                <textarea id='configTextarea' placeholder={textareaConfigTabPlaceholder} value={configText} onChange={e => setConfigText(e.target.value)}></textarea>
            </div>
            <div id='configButtonWrapper'>
                <Button title='Apply' styleClass={buttonStyles.configButtonApply} onClick={configApply}/>
            </div>
        </div>
    )
}

export default ConfigPage;