export const CONF_TAB = 'Config'
export const RESULT_TAB = 'Result'
export const CONF_EXAMP_TAB = 'Config example'

// Config texts
export const exampleConfigText = `
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
export const textareaConfigTabPlaceholder = `\n\n\n\n
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
            }
        ]
`

//Alerts
export const configSetUp = 'All set! Please dont waste time and proceed to result tab!'
export const textCopied = 'Text copied to clipboard'
export const textCopyError = 'Error in copying text: '