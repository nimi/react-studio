import { createAction } from 'redux-actions'

const Actions = {

	showComponent: createAction('show component'),

	setCurrentComponent: createAction('set current component'),

	updateComponentProps: createAction('update component props'),

	updateComponentPropTypes: createAction('update component prop types')

};

export default Actions;
