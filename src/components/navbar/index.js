import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <ul class="navbar">
            <Link to="/"><li>Home</li></Link>
            <Link to="/list"><li>List</li></Link>
            {/* <Link to="/planet"><li>Planet</li></Link>  */}
            
        </ul>

    )
}

export default Navbar;