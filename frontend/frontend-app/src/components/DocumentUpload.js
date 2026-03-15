import { useState } from "react";
import "./upload.css";

function DocumentUpload() {

const [tenthFile, setTenthFile] = useState(null);
const [twelfthFile, setTwelfthFile] = useState(null);
const [tcFile, setTcFile] = useState(null);

const handleUpload = (e) => {
e.preventDefault();

console.log("10th Marksheet:", tenthFile);
console.log("12th Marksheet:", twelfthFile);
console.log("Transfer Certificate:", tcFile);

alert("Documents uploaded successfully!");
};

return (

<div className="upload-container">

<form onSubmit={handleUpload} className="upload-box">

<h2>Upload Documents</h2>

<div className="upload-field">

<label>Upload 10th Marksheet</label>

<input
type="file"
accept=".pdf,.png,.jpg"
onChange={(e)=>setTenthFile(e.target.files[0])}
/>

</div>

<div className="upload-field">

<label>Upload 12th Marksheet</label>

<input
type="file"
accept=".pdf,.png,.jpg"
onChange={(e)=>setTwelfthFile(e.target.files[0])}
/>

</div>

<div className="upload-field">

<label>Upload Transfer Certificate</label>

<input
type="file"
accept=".pdf,.png,.jpg"
onChange={(e)=>setTcFile(e.target.files[0])}
/>

</div>

<button className="upload-btn">
Upload Documents
</button>

</form>

</div>

);

}

export default DocumentUpload;