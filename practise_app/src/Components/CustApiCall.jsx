import axios from "axios";


export default apiCall=axios.create({
    baseURL:"http://localhost:3001/employees_data"
})

