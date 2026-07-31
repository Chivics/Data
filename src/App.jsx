import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import About from "./About";

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center text-white">
      <h1 className="text-6xl font-bold mb-4">
        Welcome
      </h1>

      <p className="text-gray-400 text-lg mb-10">
        Choose a page to continue
      </p>

      <div className="flex flex-col gap-6">
        <Link
          to="/home"
          className="rounded-lg bg-indigo-600 px-8 py-4 font-semibold hover:bg-indigo-500 transition"
        >
          Home <span aria-hidden="true"> → </span>
        </Link>

        <Link
          to="/signin"
          className="rounded-lg border border-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition"
        >
          Sign In <span aria-hidden="true"> → </span>
        </Link>
        <Link
          to="/about"
          className="rounded-lg border border-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition"
        >
          About Us <span aria-hidden="true"> → </span>
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
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
