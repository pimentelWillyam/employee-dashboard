const url = "http://localhost:5000/employee"

import axios from 'axios'

export const Employee = {

    getEmployees() { // Make a request for all employee
      
      axios.get(url)
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      })
      },
      

    getEmployeeById(id) { // Make a request for an especific employee
        try {
          const response = await axios.get(url+'/'+id);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
    },

    postEmployee(name,email,phone) { // Posts an employee
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

      patchEmployeeById(id){
          console.log("to do")
      },

      deleteEmployeeById(id) { // Make a request for all employee
        try {
          const response = await axios.delete(url+"/"+id);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
}