import React ,{ Component } from 'react';
import './Styles.css';
import ReactMarkdown from 'react-markdown';

function MarkdownSanitized(props) {
	const [textAreaValue, setValue] = React.useState("Hello");

const handleChange = (event) => {
		setValue(event.target.value);
  }

  return (
    <div className="container">
    <div className="heading">Markdown Output:</div>
    <div className="content"><ReactMarkdown allowDangerousHtml>{props.value}</ReactMarkdown></div>
    </div>
    );
}

export default MarkdownSanitized;

