import React from "react";

const Button = ({ name = "button", type = "primary", onClick = () => {} }) => {
	return (
		<button onClick={onClick} className={`cButton ${type}`}>
			{name}
		</button>
	);
};

export default Button;
