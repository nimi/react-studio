import React, {Component, PropTypes} from 'react';
import style from './style.css';

function StringInput({prop, type, defaultValue, handleChange}) {
	const onChange = e => handleChange({[prop]: e.target.value});

	return (
		<div className={style.PropInput}>
			<label>{prop}</label>
			<textarea
				placeholder={`Enter a valid prop for ${prop}`}
				defaultValue={defaultValue}
				onChange={onChange}
			/>
		</div>
	);
}

export default StringInput;
