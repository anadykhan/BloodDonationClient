import axios from "axios"
import { useQuery } from "react-query"

//Fetch methods

const fetchDistricts = () => {
    return axios.get('/districts.json')
}
const fetchUpazilas = () => {
    return axios.get('/upazilas.json')
}
const fetchUsers = () => {
    return axios.get('http://localhost:8080/users')
}
const fetchUsersByEmail = (email) => {
    return axios.get(`http://localhost:8080/users/${email}`)
}

export const postRequest = (newRequest) => {
    return axios.post('http://localhost:8080/requests', newRequest)
}

//Get queries 

export const useGetDistricts = () => {
    return useQuery({
        queryKey: ['districts'],
        queryFn: fetchDistricts
    })
}
export const useGetUpazials = () => {
    return useQuery({
        queryKey: ['upazilas'],
        queryFn: fetchUpazilas
    })
}
export const useGetUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers
    })
}
export const useGetUsersByEmail = (email) => {
    return useQuery({
        queryKey: ['users', email],
        queryFn: fetchUsersByEmail(email)
    })
}