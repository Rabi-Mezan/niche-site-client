import React from 'react';
import './User.css'
import user from '../../../img/user.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const User = () => {
    const { logout } = useAuth()
    return (
        <div>
            <div className="dropdown">
                <button className="dropbtn">
                    <img className='w-10 h-10' src={user} alt="" />
                </button>
                <div className="dropdown-content">
                    <Link to="/myorders">My Order</Link>
                    <Link to="/home">
                        <button onClick={logout}>Logout</button>

                    </Link>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;