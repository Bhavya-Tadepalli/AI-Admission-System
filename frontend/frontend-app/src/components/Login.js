import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = (e)=>{
e.preventDefault();
alert("Login Successful");
}

return(

<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500">

<form onSubmit={handleLogin} className="backdrop-blur-md bg-white/30 border border-white/40 p-10 rounded-2xl shadow-2xl w-96">

<h2 className="text-3xl font-bold text-center text-white mb-6">
AI Admissions Portal
</h2>

<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full p-3 rounded-lg mb-4 bg-white/70 outline-none"
/>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full p-3 rounded-lg mb-6 bg-white/70 outline-none"
/>

<button className="w-full py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-400 transition duration-300 shadow-lg">
Login
</button>

<p className="text-center text-white mt-4">
Don't have an account?{" "}
<Link to="/signup" className="text-yellow-300 hover:underline">
Sign Up
</Link>
</p>

<p className="text-center text-white text-sm mt-2">
AI-Enabled Admissions System
</p>

</form>

</div>

)

}

export default Login;