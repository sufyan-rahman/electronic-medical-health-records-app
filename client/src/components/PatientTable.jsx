import React from 'react'
import { format } from 'date-fns'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function PatientTable() {
	const [patientData, setPatientData] = useState([])

	useEffect(()=>{
		const fetchPatientData = async ()=>{
			try{
				const res = await axios.get("http://localhost:3500/api/patient_table")
				setPatientData(res.data);
			}catch(err){
				console.log(err)
			}
		}

		fetchPatientData()
	},[])
	
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm bpatient bpatient-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Patient List</strong>
			<div className="bpatient-x bpatient-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>Customer Name</th>
							<th>Gender</th>
                            <th>Blood Group</th>
							<th>Date of Birth</th>
							<th>NID</th>
							<th>Phone</th>
							<th>Address</th>
						</tr>
					</thead>
					<tbody>
						{patientData.map((patient, index) => (
							<tr key={index}>
								<td>
									<Link to={`/patientprofile/${patient.patient_id}`}>#{patient.patient_id}</Link>
								</td>
								<td>
									<Link to={`/patientprofile/${patient.patient_id}`}>{patient.name}</Link>
									{/* <Link to={`/patientprofile/${patient.patient_id}`}>{patient.name}</Link> */}
								</td>
                                <td>{patient.gender}</td>
                                <td>{patient.bloodgroup}</td>
								<td>{format(new Date(patient.dob), 'dd MMM yyyy')}</td>
								<td>{patient.nid}</td>
								<td>{patient.phone}</td>
								<td>{patient.address}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}