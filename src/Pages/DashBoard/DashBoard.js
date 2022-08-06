import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom'
import auth from '../../firevase.init';
import useAdmin from '../../Hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="w-100 drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  mx-4">
                <h2 className='text-3xl font-bold text-purple-500 my-8'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-base-100">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 text-base-content font-bold">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/dashboard/review">Review</Link></li>
                    {admin && <>
                        <li><Link to="/dashboard/users">All users</Link></li>
                        <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                        <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;