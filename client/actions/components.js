import { createAction } from 'redux-actions'

const Actions = {

	getComponents: createAction('get components'),

	stageComponent: createAction('stage component')

};

export default Actions;
