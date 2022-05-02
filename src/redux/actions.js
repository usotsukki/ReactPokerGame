import axios from "axios";

export const GET_DECK = "GET_DECK";
export const DRAW_CARD = "DRAW_CARD";

export const getDeck = () => {
	try {
		return async (dispatch) => {
			const response = await axios.get(
				"https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
			);
			if (response.data) {
				const response = await axios.get(
					"https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=52"
				);
				if (response.data) {
					dispatch({
						type: GET_DECK,
						payload: response.data,
					});
				} else {
					console.log("Unable to draw cards");
				}
			} else {
				console.log("Unable to get deck");
			}
		};
	} catch (error) {
		console.log("Error with API");
	}
};

export const drawCard = (number) => {
	dispatch({ type: DRAW_CARD, payload: number });
};
