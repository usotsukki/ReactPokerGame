import axios from "axios";

export const GET_NEW_DECK = "GET_NEW_DECK";

export const getDeck = () => {
	try {
		return async (dispatch) => {
			const response = await axios.get(
				"https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
			);
			if (response.data) {
				dispatch({
					type: GET_NEW_DECK,
					payload: response.data,
				});
			} else {
				console.log("Unable to fetch data from the API BASE URL!");
			}
		};
	} catch (error) {
		console.log("Error with fetching");
	}
};
