import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {routeActions} from 'react-router-redux';

import style from './style.css';

import ComponentsActions from '../../actions/components';
import CurrentComponentActions from '../../actions/currentComponent';

import Navigation from '../../layouts/Navigation';
import Main from '../../layouts/Main';

class DefaultContainer extends Component {
	componentDidMount() {
		// fetch stuff

	}

	_componentSelected(component) {
		const {componentsActions, currentComponentActions} = this.props;

		componentsActions.stageComponent(component);
		currentComponentActions.setCurrentComponent(component);
	}

	render() {
		const {components, stagedComponent} = this.props.components;
		const selectedComponent = stagedComponent && stagedComponent.displayName;

		return (
			<div className={style.ReactStudio}>
				<div className={style.NavigationLayout}>
					<Navigation
						components={components}
						selectedComponent={selectedComponent}
						handleSelect={::this._componentSelected}
					/>
				</div>
				<Main className={style.MainLayout}>
					{this.props.children}
				</Main>
			</div>
		);
	}
}

export default DefaultContainer;

function mapStateToProps(state) {
	return {
		components: state.components
	};
}

function mapDispatchToProps(dispatch) {
	return {
		componentsActions: bindActionCreators(ComponentsActions, dispatch),
		currentComponentActions: bindActionCreators(CurrentComponentActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DefaultContainer);
