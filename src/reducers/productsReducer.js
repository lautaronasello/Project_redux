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
  START_EDIT_PRODUCT,
  FAILED_PRODUCT_EDIT,
} from '../types';

//cada reducer tiene su propio state
const initialState = {
  products: [],
  error: null,
  loading: false,
  deleteProduct: null,
  editProduct: null,
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case START_PRODUCTS_DOWNLOAD:
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };
    case ADD_PRODUCT_ERR:
    case FAILED_PRODUCT_DELETE:
    case FAILED_PRODUCTS_DOWNLOAD:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SUCCESS_PRODUCTS_DOWNLOAD:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case GET_DELETE_PRODUCT:
      return {
        ...state,
        deleteProduct: action.payload,
      };
    case SUCCESS_PRODUCT_DELETE:
      return {
        ...state,
        products: state.products.filter(
          (products) => products.id !== state.deleteProduct
        ),
      };
    case GET_EDIT_PRODUCT:
      return {
        ...state,
        editProduct: action.payload,
      };
    default:
      return state;
  }
}
