import React from 'react'
import { format } from 'date-fns'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function DoctorTable() {
	const [patientData, setPatientData] = useState([])
	useEffect(()=>{
		const fetchPatientData = async ()=>{
			try{
				const res = await axios.get("http://localhost:3500/api/doctor_table")
				setPatientData(res.data);
			}catch(err){
				console.log(err)
			}
		}
		fetchPatientData()
	},[])
	
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm bpatient bpatient-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Doctor List</strong>
			<div className="bpatient-x bpatient-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>Doctor Name</th>
							<th>Gender</th>
                            <th>Specialty</th>
							<th>License Number</th>
                            <th>email</th>
							<th>Phone</th>
						</tr>
					</thead>
					<tbody>
						{patientData.map((patient, index) => (
							<tr key={index}>
                                <td>{patient.doctor_id}</td>
                                <td>{patient.name}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.specialty}</td>
                                <td>{patient.license_num}</td>
								<td>{patient.email}</td>
								<td>{patient.phone}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}