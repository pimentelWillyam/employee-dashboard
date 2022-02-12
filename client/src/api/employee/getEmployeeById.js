const url = "http://localhost:5000/employee"

const axios = require("axios")

export default async function getEmployeeById(id) { // Make a request for an especific employee
    try {
      const response = await axios.get(url+'/'+id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
}