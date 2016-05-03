import { handleActions } from 'redux-actions'

const initialState = {
	top: 0,
	left: 0
};

export default handleActions({
	'update stage position' (state, action) {
		return {...state, ...action.payload};
	},
	'reset stage position' (state, action) {
		return {...state, ...initialState};
	}
}, initialState);
