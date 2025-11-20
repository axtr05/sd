import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 10 }}>
        <Link to="/">Login</Link> |{" "}
        <Link to="/register">Register</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
function Login() {
  return (
    <div>
      <h2>Login</h2>
      <input placeholder="User" /> <br />
      <input placeholder="Pass" /> <br />
      <button>Login</button>
    </div>
  );
}
function Register() {
  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" /> <br />
      <input placeholder="Email" /> <br />
      <button>Create</button>
    </div>
  );
}
function About() {
  return <h2>About Us Page</h2>;
}
function Contact() {
  return <h2>Contact Page</h2>;
}
