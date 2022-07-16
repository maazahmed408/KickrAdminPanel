import React, { useState } from "react";
import { Icon2 } from "../../Assets";
import { sidebarData } from "../../utils/SidebarData";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import CustomLink from "../CustomLink";
import { Link } from "react-router-dom";

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
						<li className="sidebar-item" key={index}>
							<CustomLink to={data.path} value={data}>
								<div
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
								</div>
							</CustomLink>

							{isVisible === data.key && data.subMenu && (
								<SubMenu submenu={data.subMenuData} />
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

const SubMenu = ({ submenu, isVisible }) => {
	return (
		<div className="sidebar-submenu">
			<ul className="sidebar-submenu-list">
				{submenu.map((submenu, index) => (
					<li key={index} className="sidebar-submenu-item">
						<Link to={submenu.path}>{submenu.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
