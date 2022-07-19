import React, { useEffect, useState } from "react";
import Header from "../../Component/Header";
import BlockContainer from "../../Component/BlockContainer";
import { AiFillEye, AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import IconViewModal from "../../Component/IconViewModal";
import {
	getCategoryListRequest,
	updateCategoryRequest,
	deleteCategoryRequest,
	updateCatIconRequest,
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion/dist/framer-motion";
import Modal from "../../Component/Modal";

const ListCategory = () => {
	const dispatch = useDispatch();
	const [isVisible, setIsVisible] = useState(false);
	const [newCatName, setNewCatName] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [catId, setCatId] = useState("");
	const [newImage, setNewImage] = useState();
	const [iconFile, setIconFile] = useState(false);
	const { authToken } = useSelector((state) => state.auth);
	const { categoryList } = useSelector((state) => state.category);

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

	useEffect(() => {
		dispatch(getCategoryListRequest(authToken));
	}, []);

	const updateImageIcon = () => {
		let data = new FormData();

		data.append("id", catId);
		data.append("image", newImage);
		data.append("iconUrl", iconFile);

		dispatch(
			updateCatIconRequest({
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

	const handleEdit = (id) => {
		setIsVisible(true);
		setCatId(id);
	};

	const handleView = (id, image) => {
		setIconFile(image);
		setIsOpen(true);
		setCatId(id);

		// setCatId(id);
	};

	const handleDelete = (id, url) => {
		let data = {
			categoryId: id,
			iconUrl: url,
		};

		dispatch(deleteCategoryRequest({ token: authToken, value: data }));
	};

	const handleRequest = () => {
		if (newCatName) {
			// FIXME: Display Success Message
			let data = {
				id: catId,
				categoryName: newCatName,
			};
			dispatch(updateCategoryRequest({ token: authToken, value: data }));
		} else {
			// FIXME: Toast Message for Error
		}
		setIsVisible(false);
	};

	return (
		<div className="page-container">
			<div className={isVisible || isOpen ? "backdrop" : "null"}>
				<Header title="Category List" />
				<BlockContainer title="Category List">
					<table className="main-table">
						<thead>
							<tr>
								{tableData.map((item, index) => (
									<th key={index}>{item.title}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{categoryList &&
								categoryList.map((item, index) => (
									<tr key={item._id}>
										<td>{++index}</td>
										<td>{item.categoryName}</td>
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
												onClick={() => handleEdit(item._id)}
											/>
										</td>
										<td>
											<MdDelete
												className="icon"
												color="red"
												onClick={() => handleDelete(item._id, item.iconUrl)}
											/>
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
					input={newCatName}
					setInput={setNewCatName}
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

export default ListCategory;
