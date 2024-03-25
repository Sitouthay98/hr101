import axios from 'axios'

export const listAllUser = async() => {
    return await axios.get('http://localhost:3000/test/user')
}

export const listSingleUser = async(id) => {
    return await axios.get('http://localhost:3000/test/user/' + id)
}

export const createUser = async(data) => {
    return await axios.post('http://localhost:3000/test/user', data)
}   

export const editUser = async(id, data) => {
    return await axios.put('http://localhost:3000/test/user/' + id, data)
}

// export const removeUser = async(id) => {
//     return await axios.delete('http://localhost:3000/test/user/' + id)
// }