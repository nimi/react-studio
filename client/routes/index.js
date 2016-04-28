import React from 'react';
import {IndexRoute, Route} from 'react-router';
import MainLayout from '../layouts/Main';
import DefaultContainer from '../containers/Default';
import WorkspaceView from '../views/Workspace';

export default (
	<Route path='/' component={DefaultContainer}>
		<IndexRoute component={WorkspaceView} />
	</Route>
);
