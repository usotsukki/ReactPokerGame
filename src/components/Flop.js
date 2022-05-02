import { useDispatch } from "react-redux";
import { getCard } from "../redux/actions";
export default function FlopButton() {
	const dispatch = useDispatch();
	const renderFlop = () => dispatch(drawCard(3));

	return (
		<div className="button flop" onClick={renderFlop}>
			flop
		</div>
	);
}
