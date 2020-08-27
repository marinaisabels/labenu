import axios, { AxiosResponse } from "axios";

const URL = "https://jsonplaceholder.typicode.com/"


const promise1:Promise<AxiosResponse> = axios.get("https://jsonplaceholder.typicode.com/posts/1")
const promise2:Promise<AxiosResponse> = axios.get("https://jsonplaceholder.typicode.com/posts/2")
const promise3:Promise<AxiosResponse> = axios.get("https://jsonplaceholder.typicode.com/posts/3")

Promise.all([promise1, promise2, promise3]).then((values: AxiosResponse[]) => {
    console.log(values)
}).catch((error) =>{
    console.error(error)
})