import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';
import DeleteorderConfirm from './DeleteorderConfirm';
import Orderaw from './Orderaw';

const Myorders = () => {
  const [user] = useAuthState(auth)
  const [deleteorder, setDeleteorder] = useState(null)
  console.log(user.email);

  const uri = `http://localhost:5000/orders/${user.email}`
  const { isLoading, error, data: order, refetch } = useQuery('order', () =>

    fetch(uri, {
      method: 'GET',
      headers: {
        'authorization': `Bearer, ${localStorage.getItem('accessToken')}`
      }

    }).then(res => res.json()))

  console.log(order);

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <h1>Your Order Item {order.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>product Img</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>price</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          {
            order.map((data, index) => <Orderaw
              data={data}
              index={index}
              setDeleteorder={setDeleteorder}
              refetch={refetch}
            >


            </Orderaw>






            )

          }
        </table>
      </div>
      {deleteorder && <DeleteorderConfirm
        deleteorder={deleteorder}
        refetch={refetch}
        setDeleteorder={setDeleteorder}

      ></DeleteorderConfirm>}
    </div>
  );
};

export default Myorders;