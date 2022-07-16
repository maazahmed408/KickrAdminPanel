import React from "react";
import Navbar from "../../Component/Navbar";
import Sidebar from "../../Component/Sidebar";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
	const { isLoggedIn } = useSelector((state) => state.auth);

	return isLoggedIn ? (
		<div className="layout">
			<Sidebar />
			<div className="container">
				<Navbar />
				<div className="main">{children}</div>
			</div>
		</div>
	) : (
		<>{children}</>
	);
};

export default Layout;
