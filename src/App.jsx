// App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Signin from './Signin';

function Nav() {
  return (
    <div></div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
