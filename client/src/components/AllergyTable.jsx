import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

export default function AllergyTable() {
	const [allergyData, setAllergyData] = useState([])
	useEffect(()=>{
		const fetchAllergyData = async ()=>{
			try{
				const res = await axios.get("http://localhost:3500/api/allergy_table")
				setAllergyData(res.data);
			}catch(err){
				console.log(err)
			}
		}

		fetchAllergyData()
	},[])
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Allergy Information</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>Allergy Name</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						{allergyData.map((data, index) => (
							<tr key={index}>
                <td>{data.allergy_id}</td>
                <td>{data.name}</td>
                <td>{data.description}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}