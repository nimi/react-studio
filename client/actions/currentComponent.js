import { createAction } from 'redux-actions'

const Actions = {

	showComponent: createAction('show component'),

	setCurrentComponent: createAction('set current component'),

	updateComponentProps: createAction('update component props')

};

export default Actions;
