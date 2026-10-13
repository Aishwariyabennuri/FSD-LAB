import { Link } from "react-router-dom";
import "./App.css";
function Contact() {
  return (
    <><h1>Bennuri Aishwariya</h1>
      <p>B.Tech AI & ML Student</p>
      

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
     
      <h1>Contact</h1>

      <p>Email: aishwariya@example.com</p>
      <p>Phone: +91 XXXXX XXXXX</p>
      <p>Location: Hyderabad, India</p>
       <footer>
        © 2026 Bennuri Aishwariya
      </footer>
    </>
  );
}

export default Contact;