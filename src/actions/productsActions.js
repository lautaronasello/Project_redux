import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERR,
  START_PRODUCTS_DOWNLOAD,
  SUCCESS_PRODUCTS_DOWNLOAD,
  FAILED_PRODUCTS_DOWNLOAD,
  GET_DELETE_PRODUCT,
  SUCCESS_PRODUCT_DELETE,
  FAILED_PRODUCT_DELETE,
  GET_EDIT_PRODUCT,
  SUCCESS_PRODUCT_EDIT,
  FAILED_PRODUCT_EDIT,
  START_EDIT_PRODUCT,
} from '../types';
import axios from 'axios';
import { url } from '../config/axios';
import Swal from 'sweetalert2';

//Crear nuevo prod
export function createNewProduct(product) {
  return async (dispatch) => {
    dispatch(addProduct());
    try {
      //agregar producto a API
      await axios.post(`${url}/productos`, product);

      //si todo sale bien, se actualiza este
      dispatch(addProductSucces(product));

      Swal.fire('Added!', 'The product was added successfully', 'success');
    } catch (error) {
      console.log(error);

      //si hay un error hay que cambiar el state
      dispatch(addProductErr(true));

      Swal.fire('Error', 'There was an error uploading your file', 'error');
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

//siu el producto se guarda en bd
const addProductSucces = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});
//si hubo error

const addProductErr = (isErr) => ({
  type: ADD_PRODUCT_ERR,
  payload: isErr,
});

//Funcion que descarga products de bd

export function getProductsAction() {
  return async (dispatch) => {
    dispatch(downloadProducts());

    try {
      const res = await axios.get(`${url}/productos`);
      dispatch(downloadProductsSuc(res.data));
    } catch (error) {
      dispatch(downloadProductsErr());
    }

    // await axios
    //   .get(`${url}/productos`)
    //   .then((res) => dispatch(downloadProductsSuc(res.data)))
    //   .catch(dispatch(downloadProductsErr()));
  };
}

const downloadProducts = () => ({
  type: START_PRODUCTS_DOWNLOAD,
  payload: true,
});

const downloadProductsErr = () => ({
  type: FAILED_PRODUCTS_DOWNLOAD,
  payload: true,
});

const downloadProductsSuc = (products) => ({
  type: SUCCESS_PRODUCTS_DOWNLOAD,
  payload: products,
});

//seleccionar eliminar producto
export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(getProductDelete(id));
    try {
      await axios.delete(`http://localhost:4000/productos/${id}`);
      dispatch(deleteProductSuc());
      Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    } catch (err) {
      dispatch(deleteProductErr());
    }
  };
}

const getProductDelete = (id) => ({
  type: GET_DELETE_PRODUCT,
  payload: id,
});

const deleteProductSuc = () => ({
  type: SUCCESS_PRODUCT_DELETE,
});

const deleteProductErr = () => ({
  type: FAILED_PRODUCT_DELETE,
  payload: true,
});

export function getProductEdit(product) {
  return (dispatch) => {
    dispatch(getEditProductAction(product));
  };
}

const getEditProductAction = (product) => ({
  type: GET_EDIT_PRODUCT,
  payload: product,
});
