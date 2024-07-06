/* import { useState } from "react"


export default function Login(){
    const [form,setForm]=useState({
        email:"",
        password:""
    })
    function handleChange(e){
        const {name,value}=e.target
        setForm({...form,[name]:value})
    }
    const [table,setTable]=useState([])
    function handleSubmit(e){
        e.preventDefault();
        setTable([...table,form])
        setForm({
            email:"",
            password:""
        })
    }
    return(
        <div>
            <form>
            <h1>Login</h1>
            <div>
                <label>Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter your email"/>
                <label>Password</label>
                <input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Enter your password"/>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </div>
            </form>
            <table>
                <tbody>
                    {table.map((key,index)=>(
                        <tr>
                            <td>{key.email}</td>
                            <td>{key.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
} */

import axios from "axios";
import { useState } from "react";

    export default function Login() {
      const [form, setForm] = useState({
        email: "",
        password: ""
      });
      const [table, setTable] = useState([]);
      const [isLogin,setLogin]=useState()
      function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      }
    
        async function handleSubmit(e) {
        e.preventDefault();
        try{
        const response=await axios.post("http://localhost:3001/user/login",form)
        console.log("Login Successfull!",response.data)
        setLogin("Login Success!")
        setTable([...table, form]);
        setForm({
          email: "",
          password: ""
        });
        }catch(err){
            console.log(err.message)
        }
      }
    
      return (
        <div className="container mx-auto p-4">
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto mt-40 animate-slide-in"
          >
            <h1 className="text-white text-3xl font-bold mb-4 text-center">Login</h1>
            <h2 className="text-white text-3xl font-bold mb-4 text-center">{isLogin}</h2>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
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
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-6 max-w-md mx-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Email
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    Password
                  </th>
                </tr>
              </thead>
              <tbody>
                {table.map((item, index) => (
                  <tr key={index}>
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
    
