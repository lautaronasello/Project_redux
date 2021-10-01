import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

//actions de redux
import { createNewProduct } from '../actions/productsActions';

export default function NewProducts({ history }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  //utilizar use dispatch y te crea una funcion
  const dispatch = useDispatch();

  //acceder al state del store
  const loading = useSelector((state) => state.products.loading);

  const addProduct = (product) => {
    dispatch(createNewProduct(product));
  };

  const submitNuevoProducto = (e) => {
    e.preventDefault();

    //validar formulario
    if (name.trim() === '' || price <= 0) return;
    //si no hay errores

    //crear nuevo producto
    addProduct({
      name,
      price,
    });

    history.push('/');
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Add new product
            </h2>
            <form onSubmit={submitNuevoProducto}>
              <div className='form-group'>
                <label>Product Name </label>
                <input
                  type='text'
                  name='name'
                  placeholder='Product Name'
                  className='form-control'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label>Product Price </label>
                <input
                  type='number'
                  name='price'
                  placeholder='Product Price'
                  className='form-control'
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
              >
                Add
              </button>
            </form>

            {loading ? <p>Cargando...</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
