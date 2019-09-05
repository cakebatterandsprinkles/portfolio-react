import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return <div className="fixed w-full z-50 text-gray-900">
            <nav className="py-4 px-6 flex justify-between navbar-main items-center">
                <a href="/">
                    <p className="text-xl md:text-2xl no-underline tracking-tight brand"><i className="fas fa-sun"></i> Yagmur Cetin Tas</p>
                </a>
                <div className="main-nav m-0 p-0 inline">
                    <span>
                        <a href="/" className="text-lg no-underline inline navbar-link">home</a>
                    </span>
                    <span>
                        <a
                            href="#works"
                            className="text-lg no-underline inline navbar-link">works</a>
                    </span>
                </div>
            </nav>
        </div>
    }
}

export default Navbar;