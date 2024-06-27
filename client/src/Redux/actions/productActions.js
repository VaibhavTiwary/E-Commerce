import axios from "axios";
import * as actionTypes from '../constants/productConstant';

const URL = 'http://localhost:8000';

export const getProducts = () => async (dispatch) => {   //getProducts will call api and will store value in data which will dispatch the values which wil go to reducer and then values will be stored in redux store
    try {
        const { data } = await axios.get(`${URL}/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data })   //will internally call getProducersReducer function in productReducer.js function
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`${URL}/product/${id}`);
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message });
    }

}

