import React, {Component, PropTypes} from 'react';

import style from './style.css';

class Stage extends Component {
	static propTypes ={
		component: PropTypes.func,
		componentProps: PropTypes.object
	}

	_renderNoComponent() {
		return (
			<div>No component in stage</div>
		);
	}

	render() {
		const {component, componentProps} = this.props;

		const Component = Boolean(component) ?
			React.createElement(component, componentProps)
			:
			this._renderNoComponent();


		return (
			<div className={style.Stage} {...this.props}>
				<div className={style.StageGrid}>
					{Component}
				</div>
			</div>
		)
	}
}

export default Stage;
