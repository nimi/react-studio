import React, {Component, PropTypes} from 'react';
import AceEditor from 'react-ace';

import 'brace/ext/language_tools';
import 'brace/mode/json';
import 'brace/mode/javascript';
import 'brace/theme/idle_fingers';

class Editor extends Component {
	static propTypes = {
		height: PropTypes.string,
		editorProps: PropTypes.object,
		mode: PropTypes.string,
		showGutter: PropTypes.bool,
		theme: PropTypes.string,
		name: PropTypes.string,
		onChange: PropTypes.func,
		defaultValue: PropTypes.oneOfType([
			PropTypes.object,
			PropTypes.array,
			PropTypes.func
		]),
		validate: PropTypes.func
	}

	static defaultProps = {
		height: '200px',
		editorProps: {$blockScrolling: Infinity},
		mode: 'json',
		showGutter: false,
		theme: 'idle_fingers',
		name: (Date.now() * Math.random() / Math.random()).toString(),
		validate: () => true
	}

	shouldComponentUpdate(nextProps) {
		const {validate} = this.props;
		const {value} = nextProps;

		return (this._isString(value) || this._isFunction(value)) ?
			!validate(value)
			:
			!validate(JSON.stringify(value));
	}

	_isString(val) {
		return Boolean(val) && typeof val === 'string';
	}

	_isFunction(val) {
		return Boolean(val) && typeof val === 'function'
	}

	_onChange(val) {
		const {onChange, validate} = this.props;
		if (validate(val)) { onChange(val); }
	}

	render() {
		const {defaultValue, value} = this.props;
		const props = {
			...this.props,
			onChange: val => this._onChange(val),
			value: !value ? JSON.stringify(defaultValue) : null
		};

		return (
			<AceEditor {...props} />
		);
	}
}

export default Editor;
