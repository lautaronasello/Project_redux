import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  deleteProductAction,
  getProductEdit,
} from '../actions/productsActions';

export default function Product({ product }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const redirectEdition = (product) => {
    dispatch(getProductEdit(product));
    history.push(`/products/edit/${product.id}`);
  };

  const confirmDelete = (id) => {
    //preguntar
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: ' Yes, delete it',
    }).then((res) => {
      if (res.value) {
        //eliminar
        dispatch(deleteProductAction(id));
      }
    });
  };

  const { name, price, id } = product;
  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className='font-weight-bold'>${price}</span>
      </td>
      <td className='acciones'>
        <button
          type='button'
          onClick={() => redirectEdition(product)}
          className='btn btn-primary mr-2'
        >
          Editar
        </button>
        <button
          onClick={() => confirmDelete(id)}
          type='button'
          className='btn btn-danger'
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}
