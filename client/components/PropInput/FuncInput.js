import React, {Component, PropTypes} from 'react';
import Editor from '../Editor';

import style from './style.css';

import {isValidFunction} from '../../utils';

class FuncInput extends Component {
	static propTypes = {
		onChange: PropTypes.func,
		defaultValue: PropTypes.func
	}

	static defaultProps = {
		defaultValue: () => {}
	}

	_onChange(val) {
		const {prop, handleChange} = this.props;

		if (isValidFunction(val) && val !== typeof 'object') {
			handleChange({[prop]: new Function(`return ${val};`)()});
		}
	}

	_validateFunction(val) {
		return isValidFunction(val);
	}

	_editorProps() {
		const {value, defaultValue} = this.props;

		return {
			value,
			defaultValue,
			name: (Date.now() * Math.random() / Math.random()).toString(),
			validate: this._validateFunction,
			onChange: ::this._onChange
		};
	}

	render() {
		const editorProps = this._editorProps();

		return (
			<div className={style.PropInput}>
				<span className={style.Label}>{this.props.prop}</span>
				<Editor {...editorProps} mode='javascript' />
			</div>
		);
	}
}

export default FuncInput;
