import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartListRequest } from "../../store/actions";
import Header from "../../Component/Header";
import BlockContainer from "../../Component/BlockContainer";

const Cart = () => {
	const dispatch = useDispatch();
	const { authToken } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getCartListRequest(authToken));
	}, []);

	return (
		<div className="page-container">
			<Header title="Order" />
			<BlockContainer title="Order"></BlockContainer>
		</div>
	);
};

export default Cart;
