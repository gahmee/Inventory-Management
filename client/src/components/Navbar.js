import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Inventory Management</h1>
                </Link>
                <div className='nav-buttons'>
                    <Link to="receive">
                        <p>Receive</p>
                    </Link>
                    <Link to="Add">
                        <p>Add</p>
                    </Link>
                    <Link to="new-count">
                        <p>New Count</p>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar