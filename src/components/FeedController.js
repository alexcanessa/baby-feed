import React, { Component } from "react";
import BabyButton from "./BabyButton";
import "./styles/FeedController.css";

export default class FeedController extends Component {
	state = {
		lastFeed: new Date(window.localStorage.getItem("last_fed")) || new Date()
	};

	updateFeed() {
		const currentFed = new Date();
		window.localStorage.setItem("last_fed", currentFed);

		this.setState({
			lastFeed: currentFed
		});
	};

	getTimeFrom(date) {
		return `${date.getHours()}:${date.getMinutes()}`;
	}
	
	render() {
		return (
			<div className="FeedController">
				<BabyButton onClick={() => this.updateFeed()} />
				<p className="FeedController__text">Last time Bruno ate: <span className="FeedController__time">{this.getTimeFrom(this.state.lastFeed)}</span></p>
			</div>
		);
	}
}