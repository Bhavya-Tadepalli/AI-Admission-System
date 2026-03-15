import React, { useState } from "react";

function Chatbot() {

  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    { text: "Hello! I am your AI Admissions Assistant.", sender: "bot" }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {

    if (!input) return;

    let reply = "Sorry, I didn't understand.";

    const msg = input.toLowerCase();

    if (msg.includes("course")) {
      reply = "Courses available: B.Tech, B.Sc, B.Com, BBA, BA";
    }

    else if (msg.includes("exam")) {
      reply = "Entrance exams: JEE Mains, EAMCET, VSAT";
    }

    else if (msg.includes("document")) {
      reply = "Documents needed: 10th memo, 12th memo, entrance exam scorecard";
    }

    setMessages([
      ...messages,
      { text: input, sender: "user" },
      { text: reply, sender: "bot" }
    ]);

    setInput("");
  };

  /* 🎤 Microphone */

  const startListening = () => {

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.onresult = (event) => {
      setInput(event.results[0][0].transcript);
    };

    recognition.start();
  };

  return (

    <>
      {/* Chat Button */}

      {!open && (

        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            fontSize: "24px",
            padding: "15px",
            borderRadius: "50%",
            background: "#ff8fab",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          💬
        </button>

      )}

      {/* Chat Window */}

      {open && (

        <div style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "340px",
          background: "white",
          border: "1px solid #ccc",
          borderRadius: "12px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.2)"
        }}>

          <div style={{
            background: "#ff8fab",
            color: "white",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between"
          }}>

            AI Chatbot

            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer"
              }}
            >
              ✖
            </button>

          </div>

          <div style={{
            height: "220px",
            overflowY: "auto",
            padding: "10px"
          }}>

            {messages.map((m, i) => (

              <div
                key={i}
                style={{
                  textAlign: m.sender === "user" ? "right" : "left",
                  background: m.sender === "user" ? "#d1e7ff" : "#eee",
                  margin: "5px",
                  padding: "6px",
                  borderRadius: "6px"
                }}
              >
                {m.text}
              </div>

            ))}

          </div>

          <div style={{ display: "flex", padding: "10px", gap: "5px" }}>

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              style={{ flex: 1, padding: "6px" }}
            />

            <button onClick={startListening}>
              🎤
            </button>

            <button onClick={sendMessage}>
              Send
            </button>

          </div>

        </div>

      )}

    </>
  );
}

export default Chatbot;