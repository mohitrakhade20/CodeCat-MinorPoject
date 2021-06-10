// // import axios from 'axios';
// import { uploadAns } from "../Registration/auth";

// import React,{Component} from 'react';
// class Test extends Component {
// 	state = {
//     file: null
// 	};
// 	// On file select (from the pop up)
// 	onFileChange = event => {
// 	// Update the state
// 	this.setState({ file: event.target.files[0] });
// 	};
// 	onFileUpload = () => {
// 	const formData = new FormData();
// 	formData.append(
// 		"files",this.state.file);
// 	console.log("passing ",this.state.file);
// 	// console.log("form data ",formData);
//   uploadAns(formData).then(data => {
//     console.log("datda",data)})
// 	};
// 	// File content to be displayed after
// 	// file upload is complete
// 	fileData = () => {
// 	if (this.state.file) {
// 		return (
// 		<div>
// 			<h2>File Details:</h2>
// <p>File Name: {this.state.file.name}</p>
// <p>File Type: {this.state.file.type}</p>
// <p>
// 			Last Modified:{" "}
// 			{this.state.file.lastModifiedDate.toDateString()}
// 			</p>
// 		</div>
// 		);
// 	} else {
// 		return (
// 		<div>
// 			<br />
// 			<h4>Choose before Pressing the Upload button</h4>
// 		</div>
// 		);
// 	}
// 	};
	
// 	render() {
	
// 	return (
// 		<div>
// 			<div>
// 				<input type="file" onChange={this.onFileChange} />
// 				<button onClick={this.onFileUpload}>
// 				Upload!
// 				</button>
// 			</div>
// 		{this.fileData()}
// 		</div>
// 	);
// 	}
// }

// export default Test;
