import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import User from './User';

const Alluser = () => {
  const { isLoading, data: user, refetch } = useQuery('user', () =>
    fetch('http://localhost:5000/user', {
      method: "GET",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'authorization': `Bearer, ${localStorage.getItem('accessToken')}`
      },
    }).then(res => res.json())
  )
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(user);

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">

          <thead>
            <tr>
              <th>SL</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              user.map((data, index) => <User
                key={data._id}
                data={data}
                index={index}
                refetch={refetch}
              ></User>)
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alluser;