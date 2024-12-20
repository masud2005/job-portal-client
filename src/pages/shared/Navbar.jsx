import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        {
            user && <>
                <li><NavLink to={'/my-application'}>My Application</NavLink></li>
                <li><NavLink to={'/add-job'}>Add Job</NavLink></li>
                <li><NavLink to={'/my-posted-jobs'}>My Posted Jobs</NavLink></li>
            </>
        }
    </>

    const handleLogout = () => {
        signOutUser()
            .then(result => {
                Swal.fire("Sign Out Successfully.");
            })
            .catch(error => {
                Swal.fire("Sign Out Failed", error.code);
            })
    }

    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="text-3xl font-bold">Job Portal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    {
                        user ? <>
                            <button onClick={handleLogout} className='btn'>Logout</button>
                        </> : <>
                            <Link to={'/login'} className='btn'>Login</Link>
                            <Link to={'/register'} className='btn'>Register</Link>
                        </>
                    }
                    {/* <Link to={'/login'} className='btn'>Login</Link>
                    <Link to={'/register'} className='btn'>Register</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;