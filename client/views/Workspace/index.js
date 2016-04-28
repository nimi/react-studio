import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Actions from '../../actions/currentComponent';
import style from './style.css';

import Stage from '../../components/Stage';
import PropPanel from '../../components/PropPanel';

class WorkspaceView extends Component {

	render() {
		const {
			component,
			componentName,
			componentProps,
			defaultComponentProps
		} = this.props.currentComponent;

		const {actions} = this.props;

		return (
			<div className={style.WorkspaceView}>
				<div className={style.Workspace}>
					<PropPanel
						component={component}
						componentName={componentName}
						componentProps={componentProps}
						defaultComponentProps={defaultComponentProps}
						handlePropChange={actions.updateComponentProps}
					/>
					<Stage
						component={component}
						componentProps={componentProps}
					/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentComponent: state.currentComponent
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
)(WorkspaceView);
