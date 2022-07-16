import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Component/AnimatedRoutes";
import Layout from "./Component/Layout";

function App() {
	return (
		<div className="App">
			<Router>
				<Layout>
					<AnimatedRoutes />
				</Layout>
			</Router>
		</div>
	);
}

export default App;
