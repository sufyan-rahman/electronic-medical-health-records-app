import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

export default function MedicalReportTable() {
	const [reportData, setReportData] = useState([])
	useEffect(()=>{
		const fetchReportData = async ()=>{
			try{
				const res = await axios.get("http://localhost:3500/api/report_table")
				setReportData(res.data);
			}catch(err){
				console.log(err)
			}
		}

		fetchReportData()
	},[])
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Medical Report</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>Report ID</th>
							<th>Patient Name</th>
							<th>Doctor Name</th>
                            <th>Appointment Date</th>
							<th>Diagnosis</th>
						</tr>
					</thead>
					<tbody>
						{reportData.map((report, index) => (
							<tr key={index}>
								<td>
									<Link to={`/report/${report.report_id}`}>#{report.report_id}</Link>
								</td>
								<td>
									<Link to={`/patientprofile/${report.patient_name}`}>{report.patient_name}</Link>
									{/* <Link to={`/Reporttprofile/${report.Reportt_id}`}>{report.Reportt_name}</Link> */}
								</td>
								<td>
									<Link to={`/patientprofile/${report.patient_name}`}>Dr. {report.doctor_name}</Link>
								</td>
                                {/* <td>Dr. {report.doctor_name}</td> */}
								<td>{format(new Date(report.visit_date), 'dd MMM yyyy')}</td>
								<td>{report.diagnosis}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}