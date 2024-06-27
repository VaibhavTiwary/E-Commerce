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

export const getProductDetails = () => async (dispatch) => {
    try {

    } catch (error) {

    }

}

