import React, {Component, PropTypes} from 'react';
import style from './style.css';

function OneOfInput({prop, options}) {
	const opts = options.map((opt, i) =>
		(<option key={i} value={opt}>{opt}</option>));

	return (
		<div className={style.PropInput}>
			<label>{prop}</label>
			<select defaultValue={1}>
				<option>Choose prop type</option>
				{opts}
			</select>
		</div>
	);
}

export default OneOfInput;

OneOfInput.propTypes = {
	name: PropTypes.string,
	options: PropTypes.array
};

OneOfInput.defaultProps = {
	options: []
}
