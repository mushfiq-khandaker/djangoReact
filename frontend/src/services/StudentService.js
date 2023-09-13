import axios from 'axios';

export async function getStudents(){
    try{
        const response = await axios.get('http://127.0.0.1:8000/students')
        return response.data
    }
    catch(error){
        console.log(error)
        throw error
    }
}