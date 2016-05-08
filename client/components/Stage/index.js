import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Actions from '../../actions/stage';

import Header from './Header';
import StagedComponent from '../StagedComponent';

import style from './style.css';

class Stage extends Component {
	static propTypes = {
		component: PropTypes.func,
		componentName: PropTypes.string,
		componentProps: PropTypes.object,
	}

	_renderNoComponent() {
		return (
			<div>No component in stage</div>
		);
	}

	_renderCollapsed() {
		return null;
	}

	_renderDragContainer() {
		const {
			component,
			componentProps,
			stage,
			actions
		} = this.props;

		if (!stage.expanded) {
			return this._renderCollapsed();
		}

		const Component = Boolean(component) ?
			React.createElement(component, componentProps)
			:
			this._renderNoComponent();

		return (
				<div className={style.StageGrid}>
					<StagedComponent
						height={175}
						top={50}
						left={50}
					>
						{Component}
					</StagedComponent>
				</div>
		)
	}

	render() {
		const { stage, actions } = this.props;

		return (
			<div className={style.Stage} {...this.props}>
				<Header
					name={this.props.componentName}
					expanded={stage.expanded}
					toggle={actions.toggleStage}
				/>
				{this._renderDragContainer()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		stage: state.stage
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Stage);
