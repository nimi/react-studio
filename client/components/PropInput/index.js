import React, {Component, PropTypes} from 'react';
import Editor from 'react-ace';
import beautifier from 'js-beautify';

import style from './style.css';

import StringInput from './StringInput';
import NumberInput from './NumberInput';
import OneOfInput from './OneOfInput';
import OneOfTypeInput from './OneOfTypeInput';
import BoolInput from './BoolInput';
import ObjectInput from './ObjectInput';
import ArrayInput from './ArrayInput';
import FuncInput from './FuncInput';

class PropInput extends Component {
	static propTypes = {
		defaultValue: PropTypes.any,
		value: PropTypes.any,
		type: PropTypes.string.isRequired,
		selectedType: PropTypes.string,
		options: PropTypes.array,
		prop: PropTypes.string.isRequired,
		handleChange: PropTypes.func.isRequired
	}

	_handleChange(newProps) {
		const {handleChange} = this.props;
		handleChange(newProps);
	}

	_renderPropInputByType(type) {
		const {props} = this;
		const inputProps = {...props, handleChange: ::this._handleChange }

		console.log(type, inputProps);

		switch (type) {
			case 'string': return <StringInput {...inputProps} />;
			case 'number': return <NumberInput {...inputProps} />;
			case 'oneOfType': return <OneOfTypeInput {...inputProps} />;
			case 'oneOf': return <OneOfInput {...inputProps} />;
			case 'bool': return <BoolInput {...inputProps} />;
			case 'object': return <ObjectInput {...inputProps} />;
			case 'array': return <ArrayInput {...inputProps} />;
			case 'func': return <FuncInput {...inputProps} />
		}

		return <StringInput {...props} />;
	}

	render() {
		return (
			<div className={style.PropInputContainer}>
				{this.props.children}
				{this._renderPropInputByType(this.props.type)}
			</div>
		);
	}
}

export default PropInput;
