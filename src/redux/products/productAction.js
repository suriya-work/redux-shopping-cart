import axios from "axios";
const fetchProductsRequest = () => {
    return {
        type: "FETCH_PRODUCTS_REQUEST"
    }
}

const fetchProductsSuccess = product => {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: product
    }
}


const fetchProductsFailure = error => {
    return {
        type: "FETCH_PRODUCTS_FAILURE",
        payload: error
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest());
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                const products = response.data;
                dispatch(fetchProductsSuccess(products))
            })

            .catch(error => {
                const errorMsg = error.massage
                dispatch(fetchProductsFailure(errorMsg))
            })
    }

}