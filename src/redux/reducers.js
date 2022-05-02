import { GET_NEW_DECK } from "./actions";

const initialState = {
	deck: [],
	table: [],
};

function gameReducer(state = initialState, action) {
	switch (action.type) {
		case GET_NEW_DECK:
			return { ...state, deck: action.payload };

		default:
			return state;
	}
}

export default gameReducer;
