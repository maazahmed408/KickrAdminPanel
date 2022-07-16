import React from "react";
import { BiArrowBack } from "react-icons/bi";

const Header = ({ title = "no title" }) => {
	return (
		<div className="page-header">
			<div className="header-title">
				<BiArrowBack />
				<p>{title}</p>
			</div>
		</div>
	);
};

export default Header;
