import './NavBar.css'
const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 className="heading">ProSearch</h1>
            <div className="nav-links">
                <a href="/">
                    Home
                </a>
                <a href="/login">
                    Login
                </a>
                <a href="/register">
                    Register
                </a>
                <a href="#logout">
                    Logout
                </a>
            </div>
            
        </nav>
    )
}
export default NavBar;