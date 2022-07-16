import React, { useState } from "react";
import { FiSearch, FiMail } from "react-icons/fi";
import { HiBell } from "react-icons/hi";
import { Profile } from "../../Assets";

const Navbar = () => {
	let date = new Date();
	const [time, setTime] = useState(date.toLocaleString());

	setInterval(() => {
		date = new Date();
		setTime(date.toLocaleString());
	}, 1000);

	return (
		<div className="navbar">
			<div className="searchbar">
				<FiSearch size={25} />
				<input type="text" placeholder="Search" />
			</div>
			<div className="menu">
				<ul className="menu-list">
					<li className="menu-item" style={{ fontWeight: 500 }}>
						{time}
					</li>
					<li className="menu-item">
						<HiBell size={25} />
					</li>
					<li className="menu-item">
						<FiMail size={25} />
					</li>
					<li className="menu-item">
						<div className="profile-holder">
							<img src={Profile} alt="" />
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
