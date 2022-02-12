const url = "http://localhost:5000/employee"

const axios = require("axios")

export async function postEmployee(name,email,phone) { // Posts an employee
    try {
      const response = await axios.post(url, { 
        name: name,
        email: email,
        phone: phone,
        }
      )
      console.log(response);
    } catch (error) {
        console.error(error);
    }
  }
