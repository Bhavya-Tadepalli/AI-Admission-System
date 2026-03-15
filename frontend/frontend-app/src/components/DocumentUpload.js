function DocumentUpload(){

return(

<div className="p-10">

<h2 className="text-3xl font-bold text-indigo-600 mb-6">
Upload Documents
</h2>

<div className="space-y-4">

<div>
<label>Upload 10th Marksheet</label>
<input type="file" className="border p-2 w-full"/>
</div>

<div>
<label>Upload 12th Marksheet</label>
<input type="file" className="border p-2 w-full"/>
</div>

<div>
<label>Upload Transfer Certificate</label>
<input type="file" className="border p-2 w-full"/>
</div>

<button className="bg-green-500 text-white p-3 rounded hover:bg-green-600">
Upload Documents
</button>

</div>

</div>

)

}

export default DocumentUpload;