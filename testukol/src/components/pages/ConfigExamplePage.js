import React from 'react'
import Button from '../button/Button';
import buttonStyles from '../button/Button.module.css'

const exampleText = `
        [
            {
                "type": "number",
                "value": 7,
                "labelText": "Count"
            },
            {
                "type": "checkbox",
                "checked": false,
                "labelText": "Is checked"
            },
            {
                "type": "text",
                "labelText": "Caption 1",
                "placeholder": "Author: Vladyslav Kalachykov"
            },
            {
                "type": "textarea",
                "labelText": "Description",
                "placeholder": "So! Welcome to my tiny application. Please surf it without any hesitation."
            },
            {
                "type": "date",
                "labelText": "Date of your birthday",
                "value": "2017-06-01"
            },
            [
                {
                  "type": "button",
                  "buttonText": "Almost ok!!"
                },
                {
                  "type": "button",
                  "buttonText": "Ok!"
                },
                {
                  "type": "button",
                  "buttonText": "Not ok!"
                },
                {
                  "type": "button",
                  "buttonText": "Almost ok!!"
                },
                {
                  "type": "button",
                  "buttonText": "Ok!"
                },
                {
                  "type": "button",
                  "buttonText": "Not ok!"
                },
                {
                  "type": "button",
                  "buttonText": "Almost ok!!"
                },
                {
                  "type": "button",
                  "buttonText": "Ok!"
                },
                {
                  "type": "button",
                  "buttonText": "Not ok!"
                },
                {
                  "type": "button",
                  "buttonText": "Almost ok!!"
                },
                {
                  "type": "button",
                  "buttonText": "Ok!"
                },
                {
                  "type": "button",
                  "buttonText": "Not ok!"
                },
                {
                  "type": "button",
                  "buttonText": "Almost ok!!"
                },
                {
                  "type": "button",
                  "buttonText": "Ok!"
                },
                {
                  "type": "button",
                  "buttonText": "Not ok!"
                },
                {
                  "type": "button",
                  "buttonText": "Almost ok!!"
                },
                {
                  "type": "button",
                  "buttonText": "Ok!"
                },
                {
                  "type": "button",
                  "buttonText": "Not ok!"
                }
            ],
            {
                "type": "number",
                "value": 7,
                "labelText": "Count"
            },
            {
                "type": "checkbox",
                "checked": false,
                "labelText": "Is checked"
            },
            {
                "type": "text",
                "labelText": "Caption 1",
                "placeholder": "Author: Vladyslav Kalachykov"
            },
            {
                "type": "textarea",
                "labelText": "Description",
                "placeholder": "So! Welcome to my tiny application. Please surf it without any hesitation."
            },
            {
                "type": "date",
                "labelText": "Date of your birthday",
                "value": "2017-06-01"
            },
            [
                {
                  "type": "button",
                  "buttonText": "Almost ok!!"
                },
                {
                  "type": "button",
                  "buttonText": "Ok!"
                },
                {
                  "type": "button",
                  "buttonText": "Not ok!"
                }
            ]
        ]
`


const ConfigExamplePage = () => {

    const copyText = () => {
        navigator.clipboard.writeText(exampleText)
            .then(() => {
                alert('Text copied to clipboard');
            })
            .catch(err => {
                alert('Error in copying text: ', err);
            });
    }

    return (
        <div id='configExamplePage'>
            <div id='configExampleText'>
                {exampleText}
                <Button title='Copy example' styleClass={buttonStyles.configExampleButton} onClick={copyText}/>
            </div>
        </div>
    )
}

export default ConfigExamplePage;

