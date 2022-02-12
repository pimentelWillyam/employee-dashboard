const url = "http://localhost:5000/employee"

const axios = require("axios")


export default async function getEmployees() { // Make a request for all employee
  try {
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}