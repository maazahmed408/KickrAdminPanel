import React, { useState, useEffect } from "react";
import Header from "../../Component/Header";
import BlockContainer from "../../Component/BlockContainer";
import CustomInput, {
	CustomSelect,
	CustomFileInput,
} from "../../Component/CustomInput";
import {
	getCategoryListRequest,
	addSubCategoryRequest,
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Component/Button";

const AddSubCategory = () => {
	const dispatch = useDispatch();
	const [subCategory, setSubCategory] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [file, setFile] = useState(null);
	const { authToken } = useSelector((state) => state.auth);
	const { categoryList } = useSelector((state) => state.category);

	useEffect(() => {
		dispatch(getCategoryListRequest(authToken));
	}, []);

	const optionData = categoryList.map((category) => {
		return {
			id: category._id,
			name: category.categoryName,
		};
	});

	const handleSubmit = () => {
		let data = new FormData();
		if (!subCategory || !file || !selectedCategory) {
			//FIXME: Toast Message for Incomplete Detail
			return console.log("failure");
		} else {
			//FIXME: Toast Message for success Detail
			data.append("category", selectedCategory);
			data.append("subCategoryName", subCategory);
			data.append("image", file);
			dispatch(addSubCategoryRequest({ token: authToken, value: data }));
			console.log("Successfully submitted");
			setFile(null);
			setSelectedCategory("");
			setSubCategory("");
		}
	};

	return (
		<div className="page-container">
			<Header title="Add Sub Category" />
			<BlockContainer title="Add Sub Category">
				<div className="custom-form">
					<CustomSelect
						title="Category Name"
						optionData={optionData}
						input={selectedCategory}
						setInput={setSelectedCategory}
					/>
					<CustomInput
						title="Sub Category Name"
						input={subCategory}
						setInput={setSubCategory}
					/>
					<CustomFileInput title="Upload Icon" file={file} setFile={setFile} />
					<div className="button-group">
						<Button name="Save" onClick={handleSubmit} />
						<Button name="Cancel" type="secondary" />
					</div>
				</div>
			</BlockContainer>
		</div>
	);
};

export default AddSubCategory;
