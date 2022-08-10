//@flow

import React from 'react'
import Button from '../Button/Button';
import buttonStyles from '../Button/Button.module.css'
import {exampleConfigText, textCopied, textCopyError} from "../../constants";



const ConfigExamplePage = () : Object => {

    const copyText = () => {
        navigator.clipboard.writeText(exampleConfigText)
            .then(() => {
                alert(textCopied);
            })
            .catch(err => {
                alert(textCopyError + err);
            });
    }

    return (
        <div id='configExamplePage'>
            <div id='configExampleText'>
                <Button title='Copy example' styleClass={buttonStyles.configExampleButton} onClick={copyText}/>
                <span id='exampleConfigText'>{exampleConfigText}</span>
            </div>
        </div>
    )
}

export default ConfigExamplePage;

