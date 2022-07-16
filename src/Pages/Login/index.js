import React, { useEffect } from "react";
import { Hero, Icon } from "../../Assets";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../store/actions";
import { useFormik } from "formik";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isLoggedIn } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isLoggedIn) {
			navigate("/dashboard");
		}
	}, [isLoggedIn]);

	const formik = useFormik({
		initialValues: {
			username: "admin",
			password: "admin@123",
		},
		onSubmit: (values) => {
			submitHandler(values);
		},
	});

	const submitHandler = (values) => {
		dispatch(loginRequest(values));
	};

	return (
		<div className="login-main">
			<div className="hero-image">
				<img src={Hero} alt="" />
			</div>
			<div className="login-right">
				<div className="logo">
					<img src={Icon} alt="" />
				</div>
				<p className="subtitle">Welcome back !! please login to your account</p>
				<div className="login-form">
					<div className="login-group">
						<label className="label-text">Username</label>
						<div className="input-holder">
							<input
								type="text"
								name="username"
								onChange={formik.handleChange}
								value={formik.values.username}
								onBlur={formik.handleBlur}
							/>
						</div>
					</div>
					<div className="login-group">
						<label className="label-text">Password</label>
						<div className="input-holder">
							<input
								type="text"
								name="password"
								onChange={formik.handleChange}
								value={formik.values.password}
								onBlur={formik.handleBlur}
							/>
						</div>
					</div>
					<div className="button-holder">
						<button onClick={formik.handleSubmit}>Login</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
