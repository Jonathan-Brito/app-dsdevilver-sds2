import axios from "axios";

const API_URL='https://app-deliver-sds.herokuapp.com';

export function fetcOrders() {
    return axios (`${API_URL}/orders`);
}

export function confirmDelivery(orderId: number) {
    return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}