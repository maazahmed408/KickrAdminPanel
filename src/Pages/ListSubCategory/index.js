import React, { useEffect, useState } from "react";
import Header from "../../Component/Header";
import BlockContainer from "../../Component/BlockContainer";
import { useSelector, useDispatch } from "react-redux";
import { AiFillEye, AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Modal from "../../Component/Modal";
import IconViewModal from "../../Component/IconViewModal";

import {
	getSubCategoryListRequest,
	updateSubCategoryRequest,
	updateSubCatIconRequest,
} from "../../store/actions";

const ListSubCategory = () => {
	const dispatch = useDispatch();
	const [isVisible, setIsVisible] = useState(false);
	const [newSubCatName, setNewSubCatName] = useState("");
	const [subCatId, setSubCatId] = useState("");
	const [newImage, setNewImage] = useState();
	const [iconFile, setIconFile] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [catId, setCatId] = useState("");
	const { authToken } = useSelector((state) => state.auth);
	const { subCategoryList } = useSelector((state) => state.category);

	const tableData = [
		{
			key: "sno",
			title: "S.No",
		},
		// {
		// 	key: "categoryName",
		// 	title: "Category Name",
		// },

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

	const updateImageIcon = () => {
		let data = new FormData();

		data.append("id", catId);
		data.append("image", newImage);
		data.append("iconUrl", iconFile);

		dispatch(
			updateSubCatIconRequest({
				token: authToken,
				value: data,
			})
		);
	};

	useEffect(() => {
		if (newImage) {
			updateImageIcon();
		}
	}, [newImage]);

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

	const handleView = (id, image) => {
		setIconFile(image);
		setIsOpen(true);
		setCatId(id);

		// setCatId(id);
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
			<div className={isVisible || isOpen ? "backdrop" : "null"}>
				<Header title="Sub Category List" />
				<BlockContainer title="Sub Category List">
					<table className="main-table">
						<thead>
							<tr>
								{tableData.map((item, index) => (
									<th key={index}>{item.title}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{subCategoryList &&
								subCategoryList.map((item, index) => (
									<tr key={item._id}>
										<td>{++index}</td>
										{/* <td>{item.category.categoryName}</td> */}
										<td>{item.subCategoryName}</td>
										<td>{item.createdAt}</td>
										<td>
											<AiFillEye
												className="icon"
												onClick={() => handleView(item._id, item.iconUrl)}
											/>
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
			{isOpen && (
				<IconViewModal
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					iconFile={iconFile}
					setIconFile={setIconFile}
					newImage={newImage}
					setNewImage={setNewImage}
					handleRequest={handleRequest}
				/>
			)}
		</div>
	);
};

export default ListSubCategory;
