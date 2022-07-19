import React, { useState } from "react";
import { Icon2 } from "../../Assets";
import { sidebarData } from "../../utils/SidebarData";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import CustomLink from "../CustomLink";
import { Link } from "react-router-dom";
import { animatinSidebar } from "../../utils/animations";
import { motion } from "framer-motion/dist/framer-motion";

const Sidebar = () => {
	const [isVisible, setIsVisible] = useState("");

	const handleDropDown = (key) => {
		if (key === isVisible) {
			setIsVisible("");
		} else {
			setIsVisible(key);
		}
	};

	return (
		<div className="sidebar">
			<div className="sidebar-header">
				<img src={Icon2} alt="" />
			</div>
			<div className="sidebar-list">
				<ul className="sidebar-menu">
					{sidebarData.map((data, index) => (
						<motion.li
							className="sidebar-item"
							key={index}
							variants={animatinSidebar}
							initial="initial"
							animate="animate"
							exit="exit"
							transition={{ duration: 0.25, type: "spring" }}
						>
							<CustomLink to={data.path} value={data}>
								<motion.div
									// className="sidebar-submenu"
									variants={animatinSidebar}
									initial="initial"
									animate="animate"
									exit="exit"
									transition={{ duration: 0.25, type: "spring" }}
									className="sidebar-main-group"
									onClick={() => handleDropDown(data.key)}
								>
									<div className="sidebar-group">
										{data.icon}
										<span className="sidebar-text">{data.name}</span>
									</div>
									{data.subMenu &&
										(isVisible !== data.key ? (
											<AiOutlineRight className="chevron" />
										) : (
											<AiOutlineDown className="chevron" />
										))}
								</motion.div>
							</CustomLink>

							{isVisible === data.key && data.subMenu && (
								<SubMenu submenu={data.subMenuData} />
							)}
						</motion.li>
					))}
				</ul>
			</div>
		</div>
	);
};

const SubMenu = ({ submenu, isVisible }) => {
	return (
		<motion.div
			className="sidebar-submenu"
			variants={animatinSidebar}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.25, type: "tween" }}
		>
			<ul className="sidebar-submenu-list">
				{submenu.map((submenu, index) => (
					<li key={index} className="sidebar-submenu-item">
						<Link to={submenu.path}>{submenu.name}</Link>
					</li>
				))}
			</ul>
		</motion.div>
	);
};

export default Sidebar;
