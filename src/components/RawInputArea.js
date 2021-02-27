import './Styles.css';
import React ,{ Component } from 'react';
import MarkdownSanitized from './MarkdownSanitized.js';
import { saveAs, encodeBase64 } from '@progress/kendo-file-saver';
import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/3024-day.css';
import 'codemirror/theme/3024-night.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

export default function RawInputArea() {
	const codemirrorRef = React.useRef();

  React.useEffect(() => {
    const current = codemirrorRef.current.editor.display.wrapper.style.height = "1000px";
  });
  const [textAreaValue, setValue] = React.useState(localStorage.getItem('textAreaValue'));
  const [textFileName, setName] = React.useState("test.md");
  const [theme, setTheme] = React.useState("3024-day");

  const handleTheme = () => {
    if(theme=="3024-day")
    {
      setTheme("3024-night");
    }
    else
    {
      setTheme("3024-day");
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value);
    localStorage.setItem('textAreaValue', event.target.value);
  }

  const handleChange2 = (event) => {
    setName(event.target.value);
  }

  const SaveFile = () => {

    const dataURI = "data:text/plain;base64," + encodeBase64(textAreaValue);
    saveAs(dataURI, textFileName);
  }

  return (
  	<>

  	<div className="topnav">
    <div className="left">
    <div className="logo">ME</div>
    <div className="logo2">Markdown Editor!</div>
    </div>
    <div className="right">
    <button onClick={handleTheme}>Theme</button>
    </div>
    </div>

    <div className="wrapper">
    <div className="container">
    
    <form>
    <input type="text" onChange={handleChange2} value={textFileName}></input>
    <button onClick={SaveFile}>Save</button>
    </form>

    <div className="code">
    {
      (theme=="3024-day")
      ?
      <CodeMirror value={textAreaValue} onBeforeChange={(editor, data, value) => {setValue(value);
        localStorage.setItem('textAreaValue', value); }} options={{
          autoCursor: false,
          autoScroll: false,
          mode: 'markdown',
          theme: '3024-day',
          lineNumbers: true,
          lineWrapping: true
        }} ref={codemirrorRef}/>
      :
        <CodeMirror value={textAreaValue} onBeforeChange={(editor, data, value) => {setValue(value);
          localStorage.setItem('textAreaValue', value); }} options={{
            autoCursor: false,
            autoScroll: false,
            mode: 'markdown',
            theme: '3024-night',
            lineNumbers: true,
            lineWrapping: true
          }} ref={codemirrorRef}/>
      }
    </div>
    </div>
    <MarkdownSanitized value = {textAreaValue}/>
    </div>
        </>
        );
}

