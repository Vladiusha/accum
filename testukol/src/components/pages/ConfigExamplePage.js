import React from 'react'
import Button from '../button/Button';
import buttonStyles from '../button/Button.module.css'
import {exampleConfigText, textCopied, textCopyError} from "../../constants";



const ConfigExamplePage = () => {

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
                {exampleConfigText}
                <Button title='Copy example' styleClass={buttonStyles.configExampleButton} onClick={copyText}/>
            </div>
        </div>
    )
}

export default ConfigExamplePage;

