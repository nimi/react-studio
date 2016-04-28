import React, {Component, PropTypes} from 'react';
import style from './style.css';

function NumberInput({prop, type, defaultValue, handleChange}) {
	const onChange = e => handleChange({[prop]: Number(e.target.value)});

	return (
		<div className={style.PropInput}>
			<label>{prop}</label>
			<input
				type='number'
				onChange={onChange}
				defaultValue={defaultValue}
			/>
		</div>
	);
}

export default NumberInput;
