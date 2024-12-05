import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            
                <nav className="navbar navbar-expand-lg navbar-dark shadow-sm rounded-pill border border-1 bg-success">
                    <div className="container-fluid">
                        {/* Logo or Icon */}
                        <span className="fw-bold fs-4">Simple Database System</span>
                        {/* Responsive Toggle Button */}
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarContent" 
                            aria-controls="navbarContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* Collapsible Content */}
                        <div className="collapse navbar-collapse" id="navbarContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active fw-semibold" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-semibold" href="/features">
                                        Features
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-semibold" href="/about">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-semibold" href="/contact">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

        );
    }
}

export default Header;
