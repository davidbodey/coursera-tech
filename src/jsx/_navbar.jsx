const Navbar = () => {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                       data-target="nav">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                    <a>
                        <button className="button nav-button">
                            Lorem Ipsum
                        </button>
                    </a>
                </div>

                <div id="nav" className="first-navbar-item navbar-menu">
                    <a className="navbar-item is-picked">
                        Link 1
                    </a>
                    <a className="navbar-item">
                        Link 2
                    </a>
                    <a className="navbar-item">
                        Link 3
                    </a>
                    <a className="navbar-item">
                        Link 4
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;