import { Link } from "react-router-dom";
import './App.css'


function Navigation() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
      <form className="d-flex justify-content-center align-items-center">
          <div>
            <a className="nav-link me-2 mt-2" href="#">
            <Link to="/">
              <button
              
                className="btn btn-success rounded-pill px-4 py-2 mx-2  ganesh"
                type="button"
              >
                Contact Us 
              </button>
            </Link>
            {/* <Link to="/context">
              <button
                className="btn btn-success rounded-pill px-4 py-2 mx-2"
                type="button"
              >
                Context
              </button>
            </Link>
            <Link to="/redux">
              <button
                className="btn btn-success rounded-pill px-4 py-2 mx-2"
                type="button"
              >
                Redux
              </button>
            </Link> */}
              </a>
              </div>
              </form>

      </div>
      </nav>
  )}
  export default Navigation;