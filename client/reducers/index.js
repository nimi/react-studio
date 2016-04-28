import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import components from './components';
import currentComponent from './currentComponent';

export default combineReducers({
	routing,
	components,
	currentComponent
});

