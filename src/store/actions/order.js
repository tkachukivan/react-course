import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (orderId, orderData) => ({
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId,
    orderData,
});

export const purchaseBurgerFailed = error => ({
    type: actionTypes.PURCHASE_BURGER_FAILED,
    error,
});

export const purchaseBurgerStart = () => ({
    type: actionTypes.PURCHASE_BURGER_START,
});

export const purchaseBurger = orderData => dispatch => {
    dispatch(purchaseBurgerStart());
    axios.post('/orders.json', orderData)
        .then(response => {
            dispatch(purchaseBurgerSuccess(response.data.name, orderData));
        })
        .catch(error => {
            dispatch(purchaseBurgerFailed(error));
        });
}

export const purchaseInit = () => ({
    type: actionTypes.PURCHASE_INIT
});

export const fetchOrdersSuccess = orders => ({
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders
});

export const fetchOrdersFailed = error => ({
    type: actionTypes.FETCH_ORDERS_FAILED,
    error
});

export const fetchOrderStart = () => ({
    type: actionTypes.FETCH_ORDERS_START
});

export const fetchOrders = () => dispatch => {
    dispatch(fetchOrderStart())
    axios.get('/orders.json')
        .then(response => {
            const fetchedOrders = Object.keys(response.data)
                                            .map(key => ({
                                                ...response.data[key],
                                                id: key,
                                            }));
            
            dispatch(fetchOrdersSuccess(fetchedOrders));
        })
        .catch(error => {
            dispatch(fetchOrdersFailed(error));
        })
}