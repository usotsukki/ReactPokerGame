import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../App.css";
import { getDeck } from "../redux/actions";
import Bench from "./Bench";
import GetDeckButton from "./GetDeckButton";

export default function Main() {
	const { deck } = useSelector((state) => state.game);

	const dispatch = useDispatch();

	const loadDeck = () => dispatch(getDeck());

	useEffect(() => {
		let abortController = new AbortController();
		loadDeck();
		return () => {
			abortController.abort();
		};
	}, []);

	return (
		<div className="poker-table">
			<Bench />
			<GetDeckButton />
		</div>
	);
}
