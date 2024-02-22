import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function RegisterDoctor() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [specialty, setSpecialty] = useState("")
  const [phone, setPhone] = useState("")
  const [license, setLicense] = useState("")
  const [gender, setGender] = useState("M")


  const submitUserData = async e => {
    e.preventDefault()
    try {
        await axios.post("http://localhost:3500/api/register_doctor", {
        name: name,
        email: email,
        password: password,
        gender: gender,
        specialty: specialty,
        phone: phone,
        license: license
      })
  }catch(err){
    console.log(err)
  }
}
  return (
      
              <div className="flex-1 bg-white flex justify-center items-center">
                <div className="max-w-md w-full space-y-6 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-3xl font-extrabold text-gray-900" >Doctor Registration</h2>
                    <form 
                        className="mt-8 space-y-4"
                        onSubmit={submitUserData}>
                            <label className="block text-sm font-medium text-gray-700">
                            Name
                            <input 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="text" 
                                name="name" 
                                onChange={(e) => {
                                setName(e.target.value);
                                }} required />
                            </label>
                            <br />
                            <label className="block text-sm font-medium text-gray-700">
                            Email Address
                            <input 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="email" 
                                name="email" 
                                onChange={(e) => {
                                setEmail(e.target.value);
                                }} required />
                            </label>
                            <br />
                            <label className="block text-sm font-medium text-gray-700">
                            Password
                            <input
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            type="password" 
                            name="password" 
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }} required />
                            </label>
                            <br />
                            <label className="block text-sm font-medium text-gray-700">
                            Phone
                            <input 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="text" 
                                name="phone" 
                                onChange={(e) => {
                                setPhone(e.target.value);
                                }} required />
                            </label>
                            <br />
                            <label className="block text-sm font-medium text-gray-700">
                            License Number
                            <input 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="text" 
                                name="license_number" 
                                onChange={(e) => {
                                setLicense(e.target.value);
                                }} required />
                            </label>
                            <br />
                            <label className="block text-sm font-medium text-gray-700">
                            Specialty
                            <input 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="text" 
                                name="specialty" 
                                onChange={(e) => {
                                setSpecialty(e.target.value);
                                }} required />
                            </label>
                            <br />
                            <label className="block text-sm font-medium text-gray-700">
                            Gender
                            <select 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                name="gender" 
                                value={gender}
                                onChange={(e) => {
                                    setGender(e.target.value);
                                }}>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                            </label>
                            <br />
                            <button type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={submitUserData}>Register Doctor</button>
                    </form>
                </div>
            </div>  
      
      );
}
