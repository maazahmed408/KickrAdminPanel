import React, { useState } from "react";
import { FiSearch, FiMail } from "react-icons/fi";
import { HiBell } from "react-icons/hi";
import { Profile } from "../../Assets";
import { logoutRequest } from "../../store/actions";
import { useDispatch } from "react-redux";
import Button from "../Button";

const Navbar = () => {
	const dispatch = useDispatch();
	let date = new Date();
	const [time, setTime] = useState(date.toLocaleString());

	const handleLogout = () => {
		dispatch(logoutRequest());
	};

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
					{/* <li className="menu-item">
						<HiBell size={25} />
					</li>
					<li className="menu-item">
						<FiMail size={25} />
					</li> */}
					<li className="menu-item" onClick={handleLogout}>
						<Button name="Logout" type="logout-btn" />
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
