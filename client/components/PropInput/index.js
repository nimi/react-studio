import React, {Component, PropTypes} from 'react';
import Editor from 'react-ace';
import beautifier from 'js-beautify';

import style from './style.css';

import StringInput from './StringInput';
import NumberInput from './NumberInput';
import OneOfInput from './OneOfInput';
import BoolInput from './BoolInput';
import ObjectInput from './ObjectInput';

class PropInput extends Component {
	static propTypes = {
		defaultValue: PropTypes.any,
		value: PropTypes.any,
		type: PropTypes.string.isRequired,
		options: PropTypes.array,
		prop: PropTypes.string.isRequired,
		handleChange: PropTypes.func.isRequired
	}

	componentWillUpdate(nextProps) {

	}

	_handleChange(newProps) {
		const {handleChange} = this.props;

		handleChange(newProps);
	}

	_renderPropInputByType(type) {
		const {props} = this;
		const inputProps = {...props, handleChange: ::this._handleChange }

		switch (type) {
			case 'string': return <StringInput {...inputProps} />;
			case 'number': return <NumberInput {...inputProps} />;
			case 'oneOf': return <OneOfInput {...inputProps} />;
			case 'bool': return <BoolInput {...inputProps} />;
			case 'object': return <ObjectInput {...inputProps} />;
			case 'array': return <ObjectInput {...inputProps} />;
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
