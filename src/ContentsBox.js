import React from 'react';
const ContentsBox = (props) => {
    
    let textToOutput = props.displayText;
    if (props.transformText) {
        textToOutput = props.transformText(props.displayText);
    }

    return (<div>
        <input
            value={textToOutput}
            onChange={(event) => {
                // console.log(event.target.value);
                const messageText = event.target.value;
                props.changeHandler(messageText);
            }}
        />
    </div>);
};

export default ContentsBox;