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
            <h2 className='text-7xl font-bold text-white'>CV Generator</h2>

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
                    to="/register"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}
                >
                    Register
                </NavLink>

            </nav>
            <div className='flex w-36 justify-between items-center'>
                {user && <img className='w-10 rounded-full' title={user.displayName} src={user.photoURL} />}

                {user ?

                    <button onClick={handleLogOut} className="btn btn-primary">Logout</button> :
                    
                        <div className='flex gap-x-2'>
                            <Link to='/login'><button className="btn btn-outline btn-accent">Login</button></Link>
                            <Link className="btn btn-outline btn-accent" to='/generator'>Create Your CV</Link>
                        </div>
                    

                }

            </div>

        </div>
    );
};

export default Navbar;