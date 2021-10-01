import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
      <div className='container'>
        <h1>
          <Link to={'/'} className='text-light'>
            CRUD - React, Redux, REST API & Axios
          </Link>
        </h1>
      </div>
      <Link
        className='btn btn-danger d-block nuevo-post d-md-inline-block'
        to={'/products/new'}
      >
        Agregar Producto &#43;
      </Link>
    </nav>
  );
}
