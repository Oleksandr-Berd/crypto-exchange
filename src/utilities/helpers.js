import axios from "axios"
import { BASE_URL } from "./url"



export const getAllCurrencies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/v3/currencies`)
        return response
    } catch (error) {
        return error.message
    }
}

export const getAllTradePairs = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/v3/markets`);
        return response
    } catch (error) {
        return error.message
    }
}

export const getPrice = async (symbols) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/v3/tickers?symbols=${symbols}`
           
        );

        return response.data[0];
    } catch (error) {
        
    }
}