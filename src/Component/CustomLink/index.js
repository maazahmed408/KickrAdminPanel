import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ to, value, children }) => {
	return value.subMenu ? (
		<div>{children}</div>
	) : (
		<Link to={to}>{children}</Link>
	);
};

export default CustomLink;
