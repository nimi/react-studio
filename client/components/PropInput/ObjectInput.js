import React, {Component, PropTypes} from 'react';
import Editor from 'react-ace';
import style from './style.css';

import {isValidJson} from '../../utils';

function ObjectInput({id, prop, value, defaultValue, handleChange}) {
	const onChange = val => {
		if (isValidJson(val)) {
			handleChange({[prop]: JSON.parse(val)});
		}
	};
	const props = {...aceProps, value, onChange};

	return (
		<div className={style.PropInput}>
			<span className={style.Label}>{prop}</span>
			<Editor {...aceProps}  />
		</div>
	);
}

export default ObjectInput;

const aceProps = {
	className: 'stu-stu-studio',
	mode: 'json',
	showGutter: false,
	theme: 'twighlight',
	name: (Date.now() * Math.random() / Math.random()).toString()
};
