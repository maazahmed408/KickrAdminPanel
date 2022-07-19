import React, { useRef } from "react";
import { BsCloudUploadFill, BsFillCheckCircleFill } from "react-icons/bs";

const CustomInput = (props) => {
	const handleChange = (event) => {
		props.setInput(event.target.value);
	};

	return (
		<div className="custom-input">
			<label className="input-text">{props.title}</label>
			<div className="input-text-holder">
				<input type="text" onChange={handleChange} value={props.input} />
			</div>
		</div>
	);
};

export const CustomFileInput = ({ title = "Upload Icon", file, setFile }) => {
	const imageInput = useRef(null);

	const handleImage = () => {
		imageInput.current.click();
	};

	const handleChange = (e) => {
		const fileObj = e.target.files && e.target.files[0];
		if (!fileObj) {
			return;
		} else {
			setFile(fileObj);
		}
	};

	return (
		<div className="custom-input">
			<label className="input-text">{title}</label>
			<div className="input-text-holder">
				<input
					type="file"
					style={{ display: "none" }}
					ref={imageInput}
					onChange={handleChange}
				/>
				<div className="file-input-group" onClick={handleImage}>
					<p>{file ? file.name : "Click to Upload Image..."}</p>
					{file ? (
						<BsFillCheckCircleFill size={30} color="green" />
					) : (
						<BsCloudUploadFill size={30} color="#1c56c1" />
					)}
				</div>
			</div>
		</div>
	);
};
export const CustomFileLgInput = ({
	title = "Upload Icon",
	file,
	setFile,
	displayImgUrl,
	setDisplayImgUrl,
}) => {
	const imageInput = useRef(null);

	const handleImage = () => {
		imageInput.current.click();
	};

	const handleChange = (e) => {
		const fileObj = e.target.files && e.target.files[0];
		setDisplayImgUrl(URL.createObjectURL(fileObj));
		if (!fileObj) {
			return;
		} else {
			setFile(fileObj);
		}
	};

	return (
		<div className="custom-input lg-file-input">
			<label className="input-text">{title}</label>
			{displayImgUrl && (
				<>
					<div className="input-text-holder">
						<img
							src={displayImgUrl}
							style={{ width: "100%", height: "100%" }}
							alt=""
						/>
					</div>
					<button className="btn-upload-img" onClick={handleImage}>
						click to upload new Image
					</button>
				</>
			)}

			<div
				className="input-text-holder"
				style={{ display: displayImgUrl ? "none" : "" }}
			>
				<input
					type="file"
					style={{ display: "none" }}
					ref={imageInput}
					onChange={handleChange}
				/>
				<div className="file-input-group" onClick={handleImage}>
					<p>{file ? file.name : "Click to Upload Image..."}</p>
					{file ? (
						<BsFillCheckCircleFill size={30} color="green" />
					) : (
						<BsCloudUploadFill size={30} color="#1c56c1" />
					)}
				</div>
			</div>
		</div>
	);
};

export const CustomSelect = ({
	title,
	optionData = [],
	input,
	setInput,
	...props
}) => {
	const handleChange = (event) => {
		setInput(event.target.value);

		console.log(input);
	};
	return (
		<div className="custom-input">
			<label className="input-text">{title}</label>
			<div className="input-text-holder">
				<div style={{ paddingRight: "12px" }}>
					<select
						value={input}
						onChange={handleChange}
						disabled={props.disabled}
					>
						<option value="" disabled>
							{`Select ${title}`}
						</option>
						{optionData.map((option) => (
							<option key={option.id} value={option.id}>
								{option.name}
							</option>
						))}
					</select>
				</div>
			</div>
		</div>
	);
};

export const CustomTextArea = ({ title, setInput, input }) => {
	const handleChange = (event) => {
		setInput(event.target.value);
	};

	return (
		<div className="custom-input">
			<label className="input-text">{title}</label>
			<div className="input-text-holder">
				<textarea rows={6} type="text" onChange={handleChange} value={input} />
			</div>
		</div>
	);
};

export const CustomRadioButton = ({
	title = "nothing",
	onClick,
	id,
	checked,
}) => {
	return (
		<div className="radio-btn-group" onClick={() => onClick(id)}>
			<div className="radio-btn-outer">
				<div className={checked ? "radio-btn-filled" : ""}></div>
			</div>
			<span>{title}</span>
		</div>
	);
};

export default CustomInput;
