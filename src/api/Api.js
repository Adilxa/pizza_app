import axios from "axios"

const baseUrl = 'https://625eaacd873d6798e2abb689.mockapi.io/'
export const api = axios.create({
    baseURL:baseUrl
})