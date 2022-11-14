import { Link } from "react-router-dom";

function Header(){
    return (
        <div className="navbar">
            <Link to={'/'}>
                <h1>HomePage</h1>            
            </Link>
        </div>
    )
}

export default Header;