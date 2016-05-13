import React, {Component, PropTypes} from 'react';
import Editor from '../Editor';

import style from './style.css';

import {isValidJson} from '../../utils';

class ObjectInput extends Component {
	static propTypes = {
		onChange: PropTypes.func,
		defaultValue: PropTypes.object
	}

	static defaultProps = {
		defaultValue: {}
	}

	onChange(val) {
		const {prop, handleChange} = this.props;

		handleChange({[prop]: JSON.parse(val)});
	}

	_editorProps() {
		const {value, defaultValue} = this.props;

		return {
			value,
			defaultValue,
			name: (Date.now() * Math.random() / Math.random()).toString(),
			validate: isValidJson,
			onChange: ::this.onChange
		};
	}

	render() {
		return (
			<div className={style.PropInput}>
				<span className={style.Label}>{this.props.prop}</span>
				<Editor {...this._editorProps()} />
			</div>
		);
	}
}

export default ObjectInput;
