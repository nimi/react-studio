import React, {Component, PropTypes} from 'react';
import AceEditor from 'react-ace';

import 'brace/ext/language_tools';
import 'brace/mode/json';
import 'brace/mode/javascript';
import 'brace/theme/idle_fingers';


class Editor extends Component {
	static propTypes = {
		height: PropTypes.string,
		mode: PropTypes.string,
		showGutter: PropTypes.bool,
		theme: PropTypes.string,
		name: PropTypes.string,
		onChange: PropTypes.func,
		defaultValue: PropTypes.oneOfType([
			PropTypes.object,
			PropTypes.array
		]),
		validate: PropTypes.func
	}

	static defaultProps = {
		height: '200px',
		mode: 'json',
		showGutter: false,
		theme: 'idle_fingers',
		name: (Date.now() * Math.random() / Math.random()).toString(),
		validate: () => true
	}

	shouldComponentUpdate(nextProps) {
		const {validate} = this.props;
		const {value} = nextProps;

		return !this._isStringified(value) ?
			!validate(value)
			:
			!validate(JSON.stringify(value));
	}

	_isStringified(val) {
		return Boolean(val) && typeof val !== 'string';
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

		console.log(props);

		return (
			<AceEditor {...props} />
		);
	}
}

export default Editor;
