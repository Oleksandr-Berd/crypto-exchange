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