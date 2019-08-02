import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return <div className="fixed w-full z-50">
            <nav className="py-4 px-6 flex justify-between navbar-main items-center">
                <a href="/">
                    <h1 className="text-xl md:text-2xl no-underline tracking-tight">yagmur cetin tas</h1>
                </a>
                <div className="main-nav m-0 p-0 inline">
                    <span>
                        <a href="/" className="text-xl no-underline inline">home</a>
                    </span>
                    <span>
                        <a
                            href="/portfolio"
                            className="text-xl no-underline inline">work</a>
                    </span>
                </div>
            </nav>
        </div>
    }
}

export default Navbar;