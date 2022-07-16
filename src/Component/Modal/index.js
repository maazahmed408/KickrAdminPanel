import React from "react";
import CustomInput from "../CustomInput";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button";

const Modal = ({
	isVisible = false,
	setIsVisible,
	handleRequest,
	...props
}) => {
	const handleClick = () => {
		setIsVisible(false);
	};

	return (
		<div className="modal-container">
			<div
				style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
			>
				<AiOutlineClose className="icon" onClick={handleClick} />
			</div>
			<div className="modal-content">
				<CustomInput title="New Category Name" {...props} />
				<div className="button-group-modal">
					<Button name="Save" onClick={handleRequest} />
					<Button name="Cancel" type="secondary" onClick={handleClick} />
				</div>
			</div>
		</div>
	);
};

export default Modal;
