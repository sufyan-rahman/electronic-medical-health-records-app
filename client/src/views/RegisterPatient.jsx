import React, {useState} from 'react';
import axios from 'axios';

export default function RegisterPatient() {
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nid, setNid] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [date, setDate] = useState();

  const submitPatientData = async e => {
    e.preventDefault()
    try {
        await axios.post("http://localhost:3500/api/register_patient", {
        patientName: patientName,
        patientEmail: email,
        password: password,
        nid: nid,
        phone: phone,
        address: address,
        gender: gender,
        bloodgroup: bloodGroup,
        date: date,
      })
  }catch(err){
    console.log(err)
  }
}
  
  return (
      <>
          <div className="flex h-screen">
            <div className="flex-1 bg-gradient-to-r from-indigo-800 via-indigo-500 to-indigo-800 text-white p-8 flex items-center justify-center">
              <div className=''>
                <h1 className="text-4xl font-bold mb-4">Electronic Health Records</h1>
                <p className="text-lg mb-4">Patient Registration Dashboard</p>
                <p className="text-lg">Enter patient details to onboard a patient</p>
              </div>
            </div>
            {/* LOGIN FORM */}
            <div className="flex-1 bg-gray-100 flex justify-center items-center">
              <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <div>
                  <h2 className="text-3xl font-extrabold text-gray-900">Patient Registration</h2>
                </div>
                <form className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        id="email"
                        name="email"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}                      
                        id="password"
                        name="password"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(e) => {
                          setPatientName(e.target.value);
                        }}                      
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="nid" className="block text-sm font-medium text-gray-700">
                      National Identification Number
                    </label>
                    <div className="mt-1">
                      <input
                         onChange={(e) => {
                          setNid(e.target.value);
                        }}                     
                        id="nid"
                        name="nid"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <div className="mt-1">
                      <input
                         onChange={(e) => {
                          setPhone(e.target.value);
                        }}        
                        name="name"             
                        id="phone"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}                      
                        id="address"
                        name="address"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
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
                  <div>
                    <label htmlFor="blood_group" className="block text-sm font-medium text-gray-700">
                      Blood Group
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(e) => {
                          setBloodGroup(e.target.value);
                        }}                     
                        id="blood_group"
                        name="blood_group"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="DOB"className="block text-sm font-medium text-gray-700">
                       Date of Birth
                    </label>
                    <div className="mt-1">
                      <input 
                      onChange={(e) => {
                        setDate(e.target.value);
                      }} 
                      type="date" 
                      id="DOB" 
                      name="DOB"
                      className='border-2'/>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={submitPatientData}
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Register Patient
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>  
      </>
      );
};
