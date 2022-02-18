const url = "http://localhost:5000/employee"

import axios from 'axios'




export const Employee = {

  async getEmployeeList() { // Make a request for all employee
    try {
      const response = await axios.get(url);
      return response.data
    } catch (error) {
      console.error(error);
    }
  },
      

    async getEmployeeById(id) { // Make a request for an especific employee
        try {
          const response = await axios.get(url+'/'+id);
          console.log(response);
          return response.data
        } catch (error) {
          console.error(error);
        }
    },

    async postEmployee(name,email,phone) { // Posts an employee
        try {
          const response = await axios.post(url, 
            { 
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

      async UpdateEmployeeById(id,name,email,phone){ // updates an employee
          try{
            const response = await axios.patch(url+"/"+id, 
              { 
                name: name,
                email: email,
                phone: phone,
              }
            )
            console.log(response)
            return response
          }catch (error){
            console.error(error)
          }
      },

      async deleteEmployeeById(id) { //deletes an employee
        try {
          const response = await axios.delete(url+"/"+id);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
}