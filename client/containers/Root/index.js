import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import invariant from 'invariant';
import routes from '../../routes';

class Root extends Component {
	_renderRouter() {
		invariant(
			this.props.routerHistory,
			'<Root /> needs a routing context or router history to render.'
		);

		return (
			<Router history={this.props.routerHistory}>
				{routes}
			</Router>
		);
	}

	render() {
		return (
			<Provider store={this.props.store}>
				{this._renderRouter()}
			</Provider>
		);
	}
}

export default Root;
