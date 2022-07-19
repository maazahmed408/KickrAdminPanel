import React, { useEffect } from "react";
import { sidebarData } from "../../utils/SidebarData";
import { Login, UpdateProduct } from "../../Pages";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import { useLocation, Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AnimatedRoutes = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { isLoggedIn } = useSelector((state) => state.auth);
	useEffect(() => {
		if (!isLoggedIn) {
			navigate("/");
		}
	}, []);
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Login />} />
				<Route path="/updateProduct/:id" element={<UpdateProduct />} />

				{sidebarData.map((data, index) =>
					!data.subMenu ? (
						<Route key={index} path={data.path} element={data.component} />
					) : (
						data.subMenuData.map((route, index) => (
							<Route key={index} path={route.path} element={route.component} />
						))
					)
				)}
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
