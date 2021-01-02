import React = require("react");

export type HellowWorldProps = {

}

export const HellowWorldComponent: React.FC<HellowWorldProps> = (props) => {
    const [value, setValue] = React.useState<string>('');
    return <div id='widget-container'>
            <input className='theia-input' value={value} onChange={(event) => {
                setValue(event.target.value)
            }} />
            <button className='theia-button' onClick={() => {
                setValue('')
            }}>Clear Text</button>
        </div>
}