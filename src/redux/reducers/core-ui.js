import {TYPES} from "../types";

const initialState = {
	sidebarShow: 'responsive'
}

export const CoreUI = (state = initialState, { type, ...rest }) => {
	switch (type) {
		case TYPES.SET_RESPONSIVE:
			return {...state, ...rest }
		default:
			return state
	}
}
