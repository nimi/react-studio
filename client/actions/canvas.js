import { createAction } from 'redux-actions'

const Actions = {

	addComponent: createAction('add canvas component'),

	updateCanvasPosition: createAction('update canvas position'),

	resetCanvasPosition: createAction('reset canvas position')

};

export default Actions;
