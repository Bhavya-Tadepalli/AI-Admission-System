import { useState } from "react";
import { Link } from "react-router-dom";

function Signup(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSignup = (e)=>{
e.preventDefault();
alert("Account Created Successfully!");
}

return(

<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">

<form onSubmit={handleSignup} className="bg-white p-10 rounded-xl shadow-lg w-96">

<h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">
Student Signup
</h2>

<input
type="text"
placeholder="Full Name"
className="w-full p-3 border rounded mb-4"
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
className="w-full p-3 border rounded mb-4"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="w-full p-3 border rounded mb-4"
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700">
Create Account
</button>

<p className="text-center mt-4">
Already have an account?{" "}
<Link to="/login" className="text-indigo-600 hover:underline">
Login
</Link>
</p>

</form>

</div>

)

}

export default Signup;