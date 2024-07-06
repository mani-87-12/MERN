/* import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div>
            <h1>Navbar</h1>
            <div>
                <ul>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                    <li>
                        <Link to="/Logout">Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
} */

    import { Link } from "react-router-dom";

    export default function Navbar() {
      return (
        <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-3xl font-bold">Navbar</h1>
            <ul className="flex space-x-4">
              <li>
                <Link to="/register" className="text-white hover:text-yellow-300 transition duration-300">Register</Link>
              </li>
              <li>
                <Link to="/Login" className="text-white hover:text-yellow-300 transition duration-300">Login</Link>
              </li>
              <li>
                <Link to="/Logout" className="text-white hover:text-yellow-300 transition duration-300">Logout</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
    