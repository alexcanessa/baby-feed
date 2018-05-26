import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles/BabyButton.css";

export default class BabyButton extends Component {
	static propTypes = {
		onClick: PropTypes.func
	};

	static defaultProps = {
		onClick: () => {}
	};

	render() {
		return (
			<button className="BabyButton" type="button" onClick={() => this.props.onClick()}></button>
		);
	}
}
