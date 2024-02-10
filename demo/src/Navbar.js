import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="App">
            <Link to={'/Home'}>Home</Link>
            <Link to={'/About'}>About</Link>
        </div>
    )
}

export default Navbar;