import { useState } from "react";

function ApplicationForm(){

const [form,setForm] = useState({
name:"",
email:"",
phone:"",
address:"",
tenth:"",
twelfth:"",
course:"",
college:""
})

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const submitForm = (e)=>{
e.preventDefault();
alert("Application Submitted!");
}

return(

<div className="p-10">

<h2 className="text-3xl font-bold mb-6 text-indigo-600">
UG Admission Form
</h2>

<form onSubmit={submitForm} className="flex flex-col gap-4">

<input name="name" placeholder="Student Name" onChange={handleChange} className="border p-3 rounded"/>

<input name="email" placeholder="Email" onChange={handleChange} className="border p-3 rounded"/>

<input name="phone" placeholder="Phone" onChange={handleChange} className="border p-3 rounded"/>

<input name="address" placeholder="Address" onChange={handleChange} className="border p-3 rounded"/>

<input name="tenth" placeholder="10th Marks %" onChange={handleChange} className="border p-3 rounded"/>

<input name="twelfth" placeholder="12th Marks %" onChange={handleChange} className="border p-3 rounded"/>

<select name="course" onChange={handleChange} className="border p-3 rounded">

<option>Select Course</option>
<option>B.Tech</option>
<option>B.Sc</option>
<option>B.Com</option>
<option>BBA</option>
<option>BA</option>

</select>

<input name="college" placeholder="Preferred College" onChange={handleChange} className="border p-3 rounded"/>

<button className="col-span-2 bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700">
Submit Application
</button>

</form>

</div>

)

}

export default ApplicationForm;