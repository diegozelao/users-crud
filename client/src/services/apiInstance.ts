import axios from "axios";

export const apiInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
})

export const updateApiInstance = (token: string) => {
  // axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`
  axios.defaults.headers.Authorization = `Bearer ${token}`
  // console.log(axios.defaults.headers)
}

export const removeAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization
}