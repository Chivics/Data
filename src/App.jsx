import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center text-white">
      <h1 className="text-6xl font-bold mb-4">
        Welcome
      </h1>

      <p className="text-gray-400 text-lg mb-10">
        Choose a page to continue
      </p>

      <div className="flex gap-6">
        <Link
          to="/home"
          className="rounded-lg bg-indigo-600 px-8 py-4 font-semibold hover:bg-indigo-500 transition"
        >
          Home
        </Link>

        <Link
          to="/signin"
          className="rounded-lg border border-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}
