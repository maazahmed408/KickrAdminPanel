import React, { useEffect, useState } from "react";
import Header from "../../Component/Header";
import BlockContainer from "../../Component/BlockContainer";
import { useSelector, useDispatch } from "react-redux";
import { AiFillEye, AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Modal from "../../Component/Modal";
import {
	getSubCategoryListRequest,
	updateSubCategoryRequest,
} from "../../store/actions";

const ListSubCategory = () => {
	const dispatch = useDispatch();
	const [isVisible, setIsVisible] = useState(false);
	const [newSubCatName, setNewSubCatName] = useState("");
	const [subCatId, setSubCatId] = useState("");
	const [catId, setCatId] = useState("");
	const { authToken } = useSelector((state) => state.auth);
	const { subCategoryList } = useSelector((state) => state.category);

	const tableData = [
		{
			key: "sno",
			title: "S.No",
		},
		{
			key: "categoryName",
			title: "Category Name",
		},

		{
			key: "subCategoryName",
			title: "Sub Category Name",
		},
		{
			key: "createdAt",
			title: "Created At",
		},
		{
			key: "view",
			title: "View",
		},
		{
			key: "edit",
			title: "Edit",
		},
		{
			key: "action",
			title: "Action",
		},
	];

	const handleRequest = () => {
		if (newSubCatName) {
			// FIXME: Display Success Message
			let data = {
				id: subCatId,
				subCategoryName: newSubCatName,
				category: catId,
			};
			dispatch(updateSubCategoryRequest({ token: authToken, value: data }));
		} else {
			// FIXME: Toast Message for Error
		}
		setIsVisible(false);
	};

	const handleEdit = (subId, catId) => {
		setIsVisible(true);
		setSubCatId(subId);
		setCatId(catId);
	};

	useEffect(() => {
		dispatch(getSubCategoryListRequest(authToken));
	}, []);

	return (
		<div className="page-container">
			<div className={isVisible ? "backdrop" : "null"}>
				<Header title="Sub Category List" />
				<BlockContainer title="Sub Category List">
					<table className="main-table">
						<thead>
							<tr>
								{tableData.map((item, index) => (
									<th>{item.title}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{subCategoryList &&
								subCategoryList.map((item, index) => (
									<tr key={item._id}>
										<td>{++index}</td>
										<td>{item.category.categoryName}</td>
										<td>{item.subCategoryName}</td>
										<td>{item.createdAt}</td>
										<td>
											<AiFillEye className="icon" />
										</td>
										<td>
											<AiFillEdit
												className="icon"
												onClick={() => handleEdit(item._id, item.category._id)}
											/>
										</td>
										<td>
											<MdDelete className="icon" color="red" />
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</BlockContainer>
			</div>
			{isVisible && (
				<Modal
					isVisible={isVisible}
					setIsVisible={setIsVisible}
					input={newSubCatName}
					setInput={setNewSubCatName}
					handleRequest={handleRequest}
				/>
			)}
		</div>
	);
};

export default ListSubCategory;
