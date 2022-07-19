import React from "react";
import { animation } from "../../utils/animations";
import { motion } from "framer-motion/dist/framer-motion";

const BlockContainer = ({ children, title }) => {
	return (
		<motion.div
			className="block-container"
			variants={animation}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.3, type: "tween" }}
		>
			<p className="block-title">{title}</p>
			<div className="overflow-scroll-container">{children}</div>
		</motion.div>
	);
};

export default BlockContainer;
