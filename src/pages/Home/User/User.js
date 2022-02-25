import React from 'react';
import './User.css'
import user from '../../../img/user.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';


const User = () => {
    const { logout, admin } = useAuth()
    const history = useHistory()

    const handleLogout = () => {
        logout()
        history.push('/home')
    }

    return (
        <div>
            <div className="dropdown">
                <button className="dropbtn">
                    <img className='w-10 h-10' src={user} alt="" />
                </button>
                {
                    admin ?
                        <div className="dropdown-content">
                            <Link to="/myorders">Manage Orders</Link>
                            <Link to="/wishlist">Add Products</Link>
                            <Link to="/wishlist">Make Admin</Link>
                            <Link to="">
                                <button onClick={handleLogout}>Logout</button>

                            </Link>
                            <div>
                            </div>
                        </div>

                        :

                        <div className="dropdown-content">
                            <Link to="/myorders">My Order</Link>
                            <Link to="/wishlist">My Wisthlist</Link>
                            <Link to="">
                                <button onClick={handleLogout}>Logout</button>

                            </Link>
                            <div>
                            </div>
                        </div>

                }
            </div>
        </div>
    );
};

export default User;