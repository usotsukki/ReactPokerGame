import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Bench() {
	const { deck, table } = useSelector((state) => state.game);

	return (
		<div className="bench">
			<p>deck id: {deck.deck_id}</p>
			<p>cards: {deck.remaining}</p>
			<p>cards on table: {table}</p>
		</div>
	);
}
