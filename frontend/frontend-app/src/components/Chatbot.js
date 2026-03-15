import { useState } from "react";

function Chatbot(){

const [message,setMessage] = useState("");

const sendMessage = ()=>{
alert("Chatbot response coming soon");
};

return(

<div style={{textAlign:"center",marginTop:"80px"}}>

<h2>Admissions Chatbot</h2>

<input
placeholder="Ask your question"
onChange={(e)=>setMessage(e.target.value)}
/>

<button onClick={sendMessage}>
Send
</button>

</div>

)

}

export default Chatbot;