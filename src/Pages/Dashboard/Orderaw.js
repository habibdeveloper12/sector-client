import React from 'react';
import { Link } from 'react-router-dom';

const Orderaw = ({ data, index, refetch, setDeleteorder }) => {
  return (

    <tbody>

      <tr>
        <td>{index + 1}</td>
        <td> <img src={data.image} className="w-24" alt="" /> </td>
        <td>{data.name}</td>
        <td>{data.quantity}</td>
        <td>{data.price}</td>
        <td>{(data.price && !data.paid) && <Link to={`/dashboard/payment/${data._id}`}><button className='btn btn-success'>Pay</button></Link>}{(data.price && data.paid) && <div> <p className='text-primary'>Payment Id :<br />{data.transactionId}</p> <span className='text-success'>Paid</span></div>}

        </td>
        <td>  <label onClick={() => setDeleteorder(data)} for='delete-confirm-modal' class="btn btn-error">Delete</label></td>
      </tr>


    </tbody>

  );
};

export default Orderaw;