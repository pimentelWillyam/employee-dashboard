const url = "http://localhost:5000/employee"

const axios = require("axios")

export default async function deleteEmployeeById(id) { // Make a request for all employee
    try {
      const response = await axios.delete(url+"/"+id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }