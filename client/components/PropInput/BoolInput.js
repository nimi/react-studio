import React, {Component, PropTypes} from 'react';
import style from './style.css';

function BoolInput({id, prop, type, defaultValue, handleChange}) {
	const onChange = e => handleChange({[prop]: e.target.checked});

	return (
		<div className={style.PropInput}>
			<span className={style.Label}>{prop}</span>
			<input
				id={id}
				type="checkbox"
				defaultChecked={defaultValue}
				onChange={onChange}
			/>
			<label htmlFor={id} />
		</div>
	);
}

export default BoolInput;
