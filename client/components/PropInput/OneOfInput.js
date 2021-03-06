import React, {Component, PropTypes} from 'react';
import style from './style.css';

import StringInput from './StringInput';
import NumberInput from './NumberInput';

class OneOfInput extends Component {
	static propTypes = {
		options: PropTypes.array
	}

	static defaultProps = {
		options: []
	}

	_handleSelectChanged(e) {
		const {handleChange, prop, options} = this.props;
		const index = Number(e.target.value);

		Boolean(index) && handleChange({[prop]: options[index]});
	}

	_renderOptions() {
		const {prop, options} = this.props;

		return options.map((opt, i) => (
			<option
				key={i}
				value={i}
			>
				{opt}
			</option>
		));

	}

	render() {
		const {prop, options, value, selectedType} = this.props;
//		const opts = options.map((opt, i) =>
//			(<option key={i} value={i}>{opt}</option>));
		const opts = this._renderOptions();
		console.log(options);

		return (
			<div className={style.PropInput}>
				<label>{prop}</label>
				<select defaultValue={1} onChange={::this._handleSelectChanged}>
					<option value=''>Choose prop</option>
					{opts}
				</select>
			</div>
		);
	}
}

export default OneOfInput;
