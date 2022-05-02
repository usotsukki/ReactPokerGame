import { GET_DECK, DRAW_CARD } from "./actions";

const initialState = {
	deck: [],
	table: [],
};

function gameReducer(state = initialState, action) {
	switch (action.type) {
		case GET_DECK:
			return { ...state, deck: action.payload };
		case DRAW_CARD:
			const deck = state.deck;
			const len = deck.length;
			const toPlay = deck.splice(len - 1 - action.payload);
			return { deck, table: [...state.table, toPlay] };
		default:
			return state;
	}
}

export default gameReducer;
