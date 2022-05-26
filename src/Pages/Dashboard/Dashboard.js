import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-start mt-24">
          {/* <!-- Page content here --> */}
          <div>
            <h1 className='text-4xl text-primary'>Dashboard</h1>
            <Outlet></Outlet>
          </div>
          <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div class="drawer-side mt-24">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">


            {
              admin ? <>


                <li><Link to={'/dashboard/myhistory'}>My Profile</Link></li>
                <li><Link to={'/dashboard/alluser'}>Make Admin</Link></li>
                <li><Link to={'/dashboard/manageorders'}>Manage Orders</Link></li>
                <li><Link to={'/dashboard/manageproducts'}>Manage Products</Link></li>
                <li><Link to={'/dashboard/addproduct'}>Add Product</Link></li>
              </> : <>
                <li><Link to={'/dashboard'}>My orders</Link></li>
                <li><Link to={'/dashboard/myreview'}>Add a Review</Link></li>
                <li><Link to={'/dashboard/myhistory'}>My Profile</Link></li>
              </>
            }

          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;