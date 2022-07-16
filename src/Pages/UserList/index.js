import React, { useEffect } from "react";
import Header from "../../Component/Header";
import BlockContainer from "../../Component/BlockContainer";
import { useSelector, useDispatch } from "react-redux";
import { getUserListRequest } from "../../store/actions";

const UserList = () => {
	const dispatch = useDispatch();
	const tableData = [
		{
			key: "sno",
			title: "S.No",
		},
		{
			key: "name",
			title: "Name",
		},
		{
			key: "gender",
			title: "Gender",
		},
		{
			key: "birth",
			title: "Birth",
		},
		{
			key: "Email",
			title: "email",
		},
		{
			key: "mobileNo",
			title: "Mobile No",
		},
	];

	const { authToken } = useSelector((state) => state.auth);
	const { userList } = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(getUserListRequest(authToken));
	}, []);

	return (
		<div className="page-container">
			<Header title="User's List" />
			<BlockContainer title="User's List">
				<table className="main-table">
					<thead>
						<tr>
							{tableData.map((item, index) => (
								<th key={index}> {item.title}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{userList.map((item, index) => (
							<tr key={item._id}>
								<td>{++index}</td>
								<td>{item.name}</td>
								<td>{item.gender}</td>
								<td>{item.dob}</td>
								<td>{item.email}</td>
								<td>{item.phone}</td>
							</tr>
						))}
					</tbody>
				</table>
			</BlockContainer>
		</div>
	);
};

export default UserList;
