import axios from 'axios';


const mylink="http://localhost:8080/demo/getData";


class Employee{

    getEmployee(){
        return axios.get(mylink);
    }

    createEmployee(employee){
        return axios.post("http://localhost:8080/demo/postData", employee);
    }
    deleteEmployee(id){
        return axios.delete("http://localhost:8080/demo/deleteData", id);
    }
}


export default new Employee();