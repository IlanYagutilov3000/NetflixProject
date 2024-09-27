import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <h1 className="navbar-brand text-danger">Watchme</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav nav-underline">
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link text-light">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/Topseries"} className="nav-link text-light">Top Series</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/About"} className="nav-link text-light">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>);
}

export default Navbar;