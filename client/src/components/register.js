//import { useState } from "react"

/* export default function Register(){
    const [formData,setForm]=useState({
        name:"",
        email:"",
        password:""
    })
    const [tableData,setTable]=useState([])
    function handleChange(e){
        const {name,value}=e.target;
        setForm({...formData,[name]:value})
    }
    function handleSubmit(e){
        e.preventDefault()
        setTable([...tableData,formData])
        setForm({
            name:"",
            email:"",
            password:""
        })
    }
    return(
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name"/>
                    <label>Email</label>
                    <input id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email"/>
                    <label>Password</label>
                    <input id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password"/>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
                <div>
                    <table>
                        <tbody>
                            {tableData.map((item, index) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    )
} */


    import React, { useState } from 'react';
    import axios from 'axios';
    
    export default function Register() {
      const [formData, setForm] = useState({
        name: '',
        email: '',
        password: ''
      });
      const [tableData, setTable] = useState([]);
      const [isvalid,setValid]=useState()
      function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...formData, [name]: value });
      }
    
      async function handleSubmit(e) {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:3001/user/register", formData);
          console.log("Successfully registered!", response.data);
          setTable([...tableData, formData]);
          setValid("Registration Successfull!")
          setForm({
            name: '',
            email: '',
            password: ''
          });
        } catch (err) {
          console.error("Error submitting form!", err);
        }
      }
    
      return (
        <div className="container mx-auto p-4">
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto mt-40 animate-slide-in"
          >
            <h1 className="text-white text-3xl font-bold mb-4 text-center">Register</h1>
            <h2 className="text-white text-3xl font-bold mb-4 text-center">{isvalid}</h2>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="mt-6 max-w-md mx-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Email
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Password
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b border-gray-200">{item.name}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{item.email}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{item.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    