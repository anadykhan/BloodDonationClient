import axios from "axios"
import { useQuery } from "react-query"

//Fetch methods

const fetchDistricts = () => {
    return axios.get('districts.json')
}
const fetchUpazilas = () => {
    return axios.get('upazilas.json')
}
const fetchUsers = () => {
    return axios.get('users.json')
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
