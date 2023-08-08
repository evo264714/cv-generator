import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
    const headerStyle = {
        background: 'linear-gradient(to right, #2c3e50, #1a1a1a)',
        color: 'white',
    }
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className='sm:w-full w-full md:flex items-center justify-around p-6' style={headerStyle}>
            <NavLink to="/" className='text-7xl font-bold text-white'>CV Generator</NavLink>

            <nav>
                <NavLink className='me-6'
                    to="/"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}
                >
                    Home
                </NavLink>

                <NavLink className='me-6'
                    to="/generator"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}
                >
                    Create Your CV
                </NavLink>
                {!user ? <NavLink className='me-6'
                    to="/register"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}
                >
                    Register
                </NavLink> : ""}
                {user ? <NavLink className='me-6'
                    to="/"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "" : "",
                        };
                    }}
                >
                    My Documents
                </NavLink> : ''}

                {user ? <NavLink className='me-6'
                    to="/"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "" : "",
                        };
                    }}
                >
                    My Account
                </NavLink> : ''}



            </nav>
            <div className='flex w-36 justify-between items-center'>
                {user && <img className='w-10 rounded-full' title={user.displayName} src={user.photoURL} />}

                {user ?

                    <button onClick={handleLogOut} className="btn btn-primary">Logout</button> :

                    <div className="flex items-center">

                        {user ? (
                            <button
                                onClick={handleLogOut}
                                className="btn btn-outline btn-success text-xl font-semibold mr-1"
                            >
                                Log Out
                            </button>
                        ) : (
                            <Link to="/login">
                                <button className="btn btn-outline btn-accent text-xl font-semibold">Login</button>
                            </Link>
                        )}
                        {user && (
                            <img className="w-10 rounded-full mr-2" title={user?.displayName} src={user?.photoURL} alt="" />
                        )}
                    </div>


                }

            </div>

        </div>
    );
};

export default Navbar;