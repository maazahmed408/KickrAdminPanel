import React, { useEffect } from "react";
import Header from "../../Component/Header";
import BlockContainer from "../../Component/BlockContainer";
import { AiFillEye, AiFillEdit } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductListRequest } from "../../store/actions";
import { MdDelete } from "react-icons/md";

const ListProduct = () => {
	const dispatch = useDispatch();
	const { authToken } = useSelector((state) => state.auth);
	const { productList } = useSelector((state) => state.product);
	const navigate = useNavigate();

	const tableData = [
		{
			key: "sno",
			title: "S.No",
		},
		{
			key: "productImage",
			title: "Product Image",
		},
		{
			key: "productName",
			title: "Product Name",
		},
		{
			key: "productPrice",
			title: "Product Price",
		},
		{
			key: "productOfferPrice",
			title: "Product Offer Price",
		},
		{
			key: "productCategory",
			title: "Product Category",
		},
		{
			key: "productSubCategory",
			title: "Product Sub Category",
		},
		{
			key: "productInStock",
			title: "Product In Stock",
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
			key: "delete",
			title: "Delete",
		},
	];

	const handleEdit = (id) => {
		navigate("/updateProduct/" + id);
	};

	useEffect(() => {
		dispatch(getProductListRequest(authToken));
	}, []);

	return (
		<div className="page-container">
			<Header title="Product List" />
			<BlockContainer title="Product List">
				<table className="main-table">
					<thead>
						<tr>
							{tableData.map((item, index) => (
								<th>{item.title}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{productList &&
							productList.map((product, index) => (
								<tr>
									<td>{++index}</td>
									{/* <td>{product.productMainImgUrl}</td> */}
									<td style={{ display: "flex", justifyContent: "center" }}>
										<div
											style={{
												width: "50px",
												height: "50px",
												borderRadius: "50%",
												overflow: "hidden",
											}}
										>
											<img
												src={product.productMainImgUrl}
												style={{ width: "100%", height: "100%" }}
												alt=""
											/>
										</div>
									</td>
									<td>{product.productName}</td>
									<td>{product.productPrice}</td>
									<td>{product.productOfferPrice}</td>
									<td>{product.productCategory.categoryName}</td>
									<td>{product.productSubCategory.subCategoryName}</td>
									<td>{product.productStock ? "In Stock" : "Out Of Stock"}</td>
									<td>
										<AiFillEye className="icon" />
									</td>
									<td>
										<AiFillEdit
											className="icon"
											onClick={() => handleEdit(product._id)}
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
	);
};

export default ListProduct;
