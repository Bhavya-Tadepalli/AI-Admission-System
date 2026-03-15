import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-white">

      <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
        AI Admissions System
      </h1>

      <p className="text-lg mb-10 text-center max-w-xl">
        Welcome to the AI-Enabled Admissions Processing and Enrollment Management Portal.
        Apply, track your admission status, and interact with our intelligent system.
      </p>

      <div className="flex gap-6">

        <Link to="/login">
          <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300">
            Login
          </button>
        </Link>

        <Link to="/apply">
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
            Apply Now
          </button>
        </Link>

        <Link to="/dashboard">
          <button className="px-6 py-3 bg-green-400 text-black font-semibold rounded-lg shadow-lg hover:bg-green-500 transition duration-300">
            Dashboard
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Home;