import axios from "axios"

const baseUrl = 'http://solid.lol/'
const mockApiBaseUrl = 'https://625eaacd873d6798e2abb689.mockapi.io/'

const api = axios.create({
    baseURL:mockApiBaseUrl
})

api.interceptors.request.use((config)=>{
    config.headers = {
        "token":JSON.parse(localStorage.getItem('auth'))?.token || ''
    }
    return config
})


const Api = {
    createPizza:(data) => api.post("add/pizza",data),
    //delete me!
    getAllPizzaMock:() => api.get("pizzaApp"),
    //
    getAllPizza:() => api.get("getall/pizza"),
    deletePizza:(id) =>api.delete("delete/pizza/" + id),
    auth:(data)=>api.post('/admin',data)
}

export default Api