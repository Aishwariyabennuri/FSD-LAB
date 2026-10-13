import { Link } from "react-router-dom";
import "./App.css";
function Home() {
  return (
    <> <h1>Bennuri Aishwariya</h1>
      <p>B.Tech AI & ML Student</p>
      

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h2>Bennuri Aishwariya</h2>
      <p>B.Tech AI & ML Student</p>
      <p>Welcome to my portfolio.</p>
       <footer>
        © 2026 Bennuri Aishwariya
      </footer>
    </>
  );
}

export default Home;