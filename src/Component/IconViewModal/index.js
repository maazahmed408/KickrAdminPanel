import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

const IconViewModal = ({
	setIsOpen,
	iconFile,
	setIconFile,
	newImage,
	setNewImage,
}) => {
	const imageInput = useRef(null);

	const handleImage = () => {
		imageInput.current.click();
	};

	const handleChange = (e) => {
		const fileObj = e.target.files && e.target.files[0];
		// setI(URL.createObjectURL(fileObj));
		if (!fileObj) {
			return;
		} else {
			setNewImage(fileObj);
		}
	};

	return (
		<div className="modal-container">
			<div
				style={{
					display: "flex",
					width: "100%",
					justifyContent: "flex-end",
					height: "100%",
				}}
			>
				<AiOutlineClose className="icon" onClick={() => setIsOpen(false)} />
			</div>
			{/* <div className="icon-img-container">
				<img className="img" src={iconFile} alt="" />
				<button className="update-btn">Update</button>
			</div> */}
			<div className="custom-input lg-file-input">
				<label className="input-text"></label>
				{iconFile && (
					<>
						<div className="input-text-holder">
							<img
								src={iconFile}
								style={{ width: "100%", height: "100%" }}
								alt=""
							/>
						</div>
						<button className="btn-upload-img" onClick={handleImage}>
							Update Image
						</button>
					</>
				)}

				<div
					className="input-text-holder"
					style={{ display: iconFile ? "none" : "" }}
				>
					<input
						type="file"
						style={{ display: "none" }}
						ref={imageInput}
						onChange={handleChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default IconViewModal;
