import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function EditProducts() {
  const dispatch = useDispatch();

  const editProduct = useSelector((state) => state.products.editProduct);
  if (!editProduct) return null;

  const { name, price } = editProduct;

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>Edit product</h2>
            <form>
              <div className='form-group'>
                <label>Product Name </label>
                <input
                  type='text'
                  name='name'
                  placeholder={name ? name : 'Product Name'}
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label>Product Price </label>
                <input
                  type='number'
                  name='price'
                  placeholder={price ? price : 'Product Price'}
                  className='form-control'
                />
              </div>
              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
