import React from "react";

const BlockContainer = ({ children, title }) => {
	return (
		<div className="block-container">
			<p className="block-title">{title}</p>
			<div className="overflow-scroll-container">{children}</div>
		</div>
	);
};

export default BlockContainer;
