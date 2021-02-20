import './Styles.css';
import React ,{ Component } from 'react';
import MarkdownSanitized from './MarkdownSanitized.js';

export default function RawInputArea() {
	const [textAreaValue, setValue] = React.useState(localStorage.getItem('textAreaValue'));

const handleChange = (event) => {
		setValue(event.target.value);
		localStorage.setItem('textAreaValue', event.target.value);
  }

  return (
  	<div className="wrapper">
    <div className="container">
    <div className="logo2">Realtime</div>
    <div className="logo">ME</div>
    <div className="logo2">Markdown Editor!</div>
    <div className="heading">Input Here:</div>
    <div><textarea onChange={handleChange} value={textAreaValue}/></div>
    </div>
    <MarkdownSanitized value = {textAreaValue}/>
    </div>
    );
}

