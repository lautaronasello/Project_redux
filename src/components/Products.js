import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../actions/productsActions';
import Product from './Product';

export default function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getproducts = () => dispatch(getProductsAction());
    getproducts();
  }, [dispatch]);

  //obtener el state de redux

  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);
  const loading = useSelector((state) => state.products.loading);

  return (
    <>
      <h2 className='text-center my-5'>Price List</h2>
      {error && (
        <p className='font-weight-bold alert alert-danger text-center mt-4'>
          Error
        </p>
      )}
      {loading && 'Cargando...'}
      <table className='table table-striped'>
        <thead className='bg-primary table-dark'>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <th>'There is no products'</th>
            </tr>
          ) : (
            products.map((data) => {
              return <Product key={data.id} product={data && data} />;
            })
          )}
        </tbody>
      </table>
    </>
  );
}
