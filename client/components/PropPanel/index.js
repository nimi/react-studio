import React, {Component, PropTypes} from 'react';

import style from './style.css';

import PropInput from '../PropInput';

import {getPropType} from '../../utils';

class PropPanel extends Component {
	static propTypes = {
		component: PropTypes.func,
		componentName: PropTypes.string,
		componentProps: PropTypes.object,
		defaultComponentProps: PropTypes.object,
		handlePropChange: PropTypes.func
	}

	static defaultProps = {
		componentProps: {},
		defaultComponentProps: {}
	}

	constructor(props, context) {
		super(props, context);

		if (Boolean(props)) {
			this._defineProps(props);
		}
	}

	componentWillReceiveProps(nextProps) {
		this._defineProps(nextProps);
	}

	_defineProps(props) {

	}

	_renderPropertyInputs() {
		const {propTypes} = this.props.component || {};

		return Object.keys(propTypes || {})
			.map((prop, i) => {
				const checkPropType = propTypes[prop];
				const {type, values, options } = getPropType(checkPropType);
				const defaultValue = this.props.defaultComponentProps[prop] || values;
				const value = this.props.componentProps[prop] || null;

				return (
					<PropInput
						key={`${i}-${prop}`}
						id={`${i}-${prop}`}
						defaultValue={defaultValue}
						value={value}
						type={type}
						options={options}
						prop={prop}
						handleChange={this.props.handlePropChange}
					/>
				);
			});
	}

	_renderComponentHeading() {
		return this.props.componentName ?
			(<h4>{this.props.componentName}</h4>)
			:
			null;
	}

	render() {
		return (
			<div className={style.PropPanel} {...this.props}>
				{this._renderComponentHeading()}
				<div className={style.PropInputs}>
					{this._renderPropertyInputs()}
				</div>
			</div>
		)
	}
}

export default PropPanel;
