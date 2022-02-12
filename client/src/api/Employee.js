const url = "http://localhost:5000/employee"

import axios from 'axios'

export const Employee = {

    async getEmployees() { // Make a request for all employee
        try {
          const response = await axios.get(url);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      },

    async getEmployeeById(id) { // Make a request for an especific employee
        try {
          const response = await axios.get(url+'/'+id);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
    },

    async postEmployee(name,email,phone) { // Posts an employee
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
      },

      async patchEmployeeById(id){
          console.log("to do")
      },

      async deleteEmployeeById(id) { // Make a request for all employee
        try {
          const response = await axios.delete(url+"/"+id);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
}