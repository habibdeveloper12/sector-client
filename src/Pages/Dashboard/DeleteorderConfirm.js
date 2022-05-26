import React from 'react';
import { toast } from 'react-toastify';

const DeleteorderConfirm = ({ setDeleteorder, deleteorder, refetch }) => {
  const id = deleteorder._id;
  console.log(deleteorder);

  const handleDelete = () => {


    fetch(`http://localhost:5000/orders/${id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `Bearer, ${localStorage.getItem('accessToken')}`
      }

    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success(`${deleteorder.name} Delete succesfully`)
          refetch()
        }
        else {
          toast.error("please try again ")
        }
      })
  }
  return (
    <div>

      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label for="delete-confirm-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg">Are You Sure YOu want to Delete {deleteorder.name}</h3>
          <p class="py-4">If you want to delete click delete</p>
          <div class="modal-action">
            <label onClick={handleDelete} for="delete-confirm-modal" class="btn btn-error">Delete</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteorderConfirm;