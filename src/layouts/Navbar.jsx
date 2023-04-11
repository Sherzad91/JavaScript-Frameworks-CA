import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
// react icons for cart
import { FiShoppingBag } from 'react-icons/fi';
import { CartContext } from '../provider/CartProvider';
import './nav.css'

const Navbar = () => {
    const { getCartLength } = useContext(CartContext);

    return (
        // create navbar with links to home, about, contact, products bootstrap navbar responsive
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                            <Link className="nav-link" to="/about">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Products</Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                <FiShoppingBag size={20} />
                                <span className="badge bg-danger">{getCartLength()}</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>

        </nav>

    );
}

export default Navbar;