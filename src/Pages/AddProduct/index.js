import React, { useState, useEffect } from "react";
import Header from "../../Component/Header";
import BlockContainer from "../../Component/BlockContainer";
import CustomInput, {
	CustomSelect,
	CustomFileInput,
	CustomTextArea,
	CustomRadioButton,
} from "../../Component/CustomInput";
import {
	getCategoryListRequest,
	getOneCategoryRequest,
	addProductRequest,
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Component/Button";

const AddProduct = () => {
	const dispatch = useDispatch();

	const [productName, setProductName] = useState("");
	const [productPrice, setProductPrice] = useState(0);
	const [productOfferPrice, setProductOfferPrice] = useState(0);
	const [selectedCategoryId, setSelectedCategoryId] = useState("");
	const [selectedSubCategoryId, setSelectedSubCategoryId] = useState("");
	const [productDescription, setProductDescription] = useState("");
	const [productStock, setProductStock] = useState(true);
	const [demoLink, setDemoLink] = useState("");
	const [file, setFile] = useState(null);
	const [selectedRadio, setSelectedRadio] = useState(0);

	const { authToken } = useSelector((state) => state.auth);
	const { categoryList, selectedCategory } = useSelector(
		(state) => state.category
	);

	useEffect(() => {
		dispatch(getCategoryListRequest(authToken));
	}, []);
	useEffect(() => {
		if (selectedCategoryId) {
			dispatch(
				getOneCategoryRequest({ token: authToken, id: selectedCategoryId })
			);
		}
	}, [selectedCategoryId]);

	const optionData = categoryList.map((category) => {
		return {
			id: category._id,
			name: category.categoryName,
		};
	});
	const subCategoryData = selectedCategory.map((subCategory) => {
		return {
			id: subCategory._id,
			name: subCategory.subCategoryName,
		};
	});

	const handleRadio = (id) => {
		setSelectedRadio(id);
		if (id === 1) {
			setProductStock(true);
		} else {
			setProductStock(false);
		}
	};

	const handleSubmit = () => {
		let data = new FormData();
		if (
			!selectedCategoryId ||
			!file ||
			!productName ||
			!productPrice ||
			!productOfferPrice ||
			!productDescription
		) {
			//FIXME: Toast Message for Incomplete Detail
			return console.log("failure");
		} else {
			//FIXME: Toast Message for success Detail
			data.append("productName", productName);
			data.append("productPrice", productPrice);
			data.append("productOfferPrice", productOfferPrice);
			data.append("productCategory", selectedCategoryId);
			data.append("productSubCategory", selectedSubCategoryId);
			data.append("productStock", productStock);
			data.append("productDescription", productDescription);
			data.append("demolink", demoLink);
			data.append("image", file);
			dispatch(addProductRequest({ token: authToken, value: data }));
			console.log("Successfully submitted");
			setFile(null);
			setProductName("");
			setSelectedCategoryId("");
			setSelectedSubCategoryId("");
			setProductPrice("");
			setProductOfferPrice("");
			setProductDescription("");
			setProductStock("");
			setDemoLink("");
		}
	};

	return (
		<div className="page-container">
			<Header title="Add Product" />
			<BlockContainer title="Add Product">
				<div className="custom-form">
					<CustomInput
						title="Product Name"
						input={productName}
						setInput={setProductName}
					/>
					<CustomInput
						title="Product Price"
						input={productPrice}
						setInput={setProductPrice}
					/>
					<CustomInput
						title="Product Offer Price"
						input={productOfferPrice}
						setInput={setProductOfferPrice}
					/>
					<CustomFileInput
						title="Upload Main Image"
						file={file}
						setFile={setFile}
					/>
					<CustomSelect
						title="Product Category"
						optionData={optionData}
						input={selectedCategoryId}
						setInput={setSelectedCategoryId}
					/>
					<CustomSelect
						title="Product Sub Category"
						optionData={subCategoryData}
						input={selectedSubCategoryId}
						setInput={setSelectedSubCategoryId}
						disabled={!selectedCategoryId}
					/>
					<CustomTextArea
						title="Product Description"
						input={productDescription}
						setInput={setProductDescription}
					/>
					<CustomInput
						title="Demo Link"
						input={demoLink}
						setInput={setDemoLink}
					/>
					<div style={{ display: "flex", gap: "30px" }}>
						<CustomRadioButton
							title="In Stock"
							onClick={handleRadio}
							id={1}
							checked={selectedRadio === 1}
						/>
						<CustomRadioButton
							title="Out Of Stock"
							onClick={handleRadio}
							id={2}
							checked={selectedRadio === 2}
						/>
					</div>
				</div>

				<div className="button-group">
					<Button name="Save" onClick={handleSubmit} />
					<Button name="Cancel" type="secondary" />
				</div>
			</BlockContainer>
		</div>
	);
};

export default AddProduct;
