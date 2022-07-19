import React from "react";
import CustomInput from "../CustomInput";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button";
import { animationModal } from "../../utils/animations";
import { motion } from "framer-motion/dist/framer-motion";

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
		<motion.div
			className="modal-container"
			variants={animationModal}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.25, type: "tween" }}
		>
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
		</motion.div>
	);
};

export default Modal;
