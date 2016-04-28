import React from 'react';
import { handleActions } from 'redux-actions'

const initialState = {
	isDisplayed: false,
	component: null,
	componentName: null,
	componentProps: {},
	defaultComponentProps: {}
};

export default handleActions({
	'show component' (state, action) {
		return {...state, isDisplayed: action.payload.isDisplayed};
	},
	'set current component' (state, action) {
		const element = action.payload.component &&
			React.createElement(action.payload.component);

		if (element.type && element.type.propTypes) {
			Object.keys(element.type.propTypes)
				.filter(prop => {
					if (element.type.defaultProps && !element.type.defaultProps[prop]) {
						element.type.defaultProps[prop] = null
					}
				})
		}

		return {
			...state,
			component: element.type,
			componentName: element.type && element.type.displayName || null,
			componentProps: {},
			defaultComponentProps: element.type && element.type.defaultProps
		};
	},
	'update component props' (state, action) {
		return {
			...state,
			componentProps: {
				...state.componentProps,
				...action.payload
			}
		}
	}
}, initialState);
