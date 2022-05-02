import { useDispatch } from "react-redux";
import { getDeck } from "../redux/actions";

export default function GetDeckButton() {
	const dispatch = useDispatch();
	const loadDeck = () => dispatch(getDeck());

	return (
		<div className="button re" onClick={loadDeck}>
			load new deck
		</div>
	);
}
