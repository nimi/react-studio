import { createAction } from 'redux-actions'

const Actions = {

	updateStagePosition: createAction('update stage position'),

	resetStagePostion: createAction('reset stage position'),

	toggleStage: createAction('toggle stage')

};

export default Actions;
