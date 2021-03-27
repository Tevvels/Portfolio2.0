import React from 'react';
import { Link } from "react-router-dom";
import "./style.css"

function Navbar() {
    return (
        <nav className={`navbar`}>
            <Link to="/">
                Wiki 
            </Link>
            <div className={`nav-list`}>
                <ul className={`nav-list`}>
                    <li className={`nav-listitem`}>
                        <Link to="/" className={
                                window.location.pathname === "/" || window.location.pathname === "/home"
                                ? "nav-link active"
                                : "nav-link"
                            }>
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={
                                window.location.pathname === "/about"
                                ? "nav-link active"
                                : "nav-link"
                            }>
                            about
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={
                                window.location.pathname === "/contact"
                                ? "nav-link active"
                                : "nav-link"
                            }>
                            contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume" className={
                                window.location.pathname === "/resume"
                                ? "nav-link active"
                                : "nav-link"
                            }>
                            resume
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className={
                                window.location.pathname === "/projects"
                                ? "nav-link active"
                                : "nav-link"
                            }>
                            projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;