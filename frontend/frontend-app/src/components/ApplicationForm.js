import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ApplicationForm() {

const navigate = useNavigate();

const [formData, setFormData] = useState({
name:"",
email:"",
phone:"",
address:"",
tenth:"",
twelfth:"",
course:"",
college:""
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const submitForm = (e) => {
e.preventDefault();

alert("Application Submitted Successfully!");

navigate("/upload");
};

return (

<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">

<form
onSubmit={submitForm}
className="bg-white p-10 rounded-xl shadow-xl w-96 flex flex-col gap-4"
>

<h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
UG Admission Form
</h2>

<input
type="text"
name="name"
placeholder="Student Name"
onChange={handleChange}
className="border p-3 rounded"
/>

<input
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
className="border p-3 rounded"
/>

<input
type="text"
name="phone"
placeholder="Phone"
onChange={handleChange}
className="border p-3 rounded"
/>

<input
type="text"
name="address"
placeholder="Address"
onChange={handleChange}
className="border p-3 rounded"
/>

<input
type="number"
name="tenth"
placeholder="10th Marks %"
onChange={handleChange}
className="border p-3 rounded"
/>

<input
type="number"
name="twelfth"
placeholder="12th Marks %"
onChange={handleChange}
className="border p-3 rounded"
/>

<select
name="course"
onChange={handleChange}
className="border p-3 rounded"
>

<option value="">Select Course</option>
<option>B.Tech</option>
<option>B.Sc</option>
<option>B.Com</option>
<option>BBA</option>
<option>BA</option>

</select>

<input
type="text"
name="college"
placeholder="Preferred College"
onChange={handleChange}
className="border p-3 rounded"
/>

<button
className="bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition"
>
Submit Application
</button>

</form>

</div>

);

}

export default ApplicationForm;