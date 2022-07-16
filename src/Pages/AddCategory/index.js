import React, { useState } from "react";
import Header from "../../Component/Header";
import BlockContainer from "../../Component/BlockContainer";
import CustomInput, { CustomFileInput } from "../../Component/CustomInput";
import Button from "../../Component/Button";
import { useDispatch, useSelector } from "react-redux";
import { addCategoryRequest } from "../../store/actions";

const AddCategory = () => {
	const dispatch = useDispatch();
	const { authToken } = useSelector((state) => state.auth);
	const [categoryName, setCategoryName] = useState("");
	const [icon, setIcon] = useState(null);

	const handleSubmit = () => {
		let data = new FormData();
		if (!categoryName || !icon) {
			//FIXME: Toast Message for Incomplete Detail
			return console.log("failure");
		} else {
			//FIXME: Toast Message for success Detail
			data.append("categoryName", categoryName);
			data.append("image", icon);
			dispatch(addCategoryRequest({ token: authToken, value: data }));
			console.log("Successfully submitted");
			setIcon(null);
			setCategoryName("");
		}
	};

	return (
		<div className="page-container">
			<Header title="Add Category" />
			<BlockContainer title="Add Category">
				<div className="custom-form">
					<CustomInput
						title="Category Name"
						input={categoryName}
						setInput={setCategoryName}
					/>
					<CustomFileInput file={icon} setFile={setIcon} />
					<div className="button-group">
						<Button name="Save" onClick={handleSubmit} />
						<Button name="Cancel" type="secondary" />
					</div>
				</div>
			</BlockContainer>
		</div>
	);
};

export default AddCategory;
