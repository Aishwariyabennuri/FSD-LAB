import { Link } from "react-router-dom";
import "./App.css";
function About() {
  return (
    <>
      <h1>Bennuri Aishwariya</h1>
      <p>B.Tech AI & ML Student</p>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About Me</h1>
      <p>
        Currently pursuing B.Tech in AI & ML at Chaitanya Bharathi
        Institute of Technology.
      </p>
      <h2>Education</h2>
      <div>
        <h3>B.Tech</h3>
        <p>CBIT</p>
        <p>CGPA: 9.53</p>
      </div>
      <div>
        <h3>Diploma</h3>
        <p>SGM Government Polytechnic</p>
        <p>CGPA: 9.73</p>
      </div>

      <div>
        <h3>10th</h3>
        <p>Sri Sai Grammar High School</p>
        <p>CGPA: 10.0</p>
      </div>
      
      <footer>
        © 2026 Bennuri Aishwariya
      </footer>
    </>
  );
}

export default About;