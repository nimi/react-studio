import React, {Component, PropTypes} from 'react';
import style from './style.css';

import StringInput from './StringInput';
import NumberInput from './NumberInput';

class OneOfTypeInput extends Component {
	static inputMap = new Map([
		['string', StringInput],
		['number', NumberInput]
	]);

	_handleTypeSelected(e) {
		const {value} = e.target;
		const {inputMap} = OneOfTypeInput;
		const {handleTypeChange, prop} = this.props;

		if (inputMap.has(value)) {
			handleTypeChange({[prop]: value});
		}
		else {
			handleTypeChange({[prop]: null});
		}
	}

	_handleInputSelected(value) {
		const {handleChange} = this.props;
		handleChange(value);
	}

	_renderInput(type) {
		const {inputMap} = OneOfTypeInput;
		const {handleChange, prop} = this.props;

		if (inputMap.has(type)) {
			const Component = inputMap.get(type);
			return (
				<Component
					{...this.props}
					handleChange={::this._handleInputSelected}
				/>
			);
		}

	}

	_renderOptions() {
		const {prop, options} = this.props;
		const opts = options.map((opt, i) => (
			<option
				key={i}
				value={opt}
			>
				{opt}
			</option>
		));

	}

	render() {
		const {prop, options, value, selectedType} = this.props;
		const opts = options.map((opt, i) =>
			(<option key={i} value={opt}>{opt}</option>));

		return (
			<div className={`${style.PropInput} ${style.OneOfInput}`}>
				<label>{prop}</label>
				<select defaultValue={1} onChange={::this._handleTypeSelected}>
					<option value=''>Choose prop type</option>
					{opts}
				</select>
				{this._renderInput(selectedType)}
			</div>
		);
	}
}

export default OneOfTypeInput;

