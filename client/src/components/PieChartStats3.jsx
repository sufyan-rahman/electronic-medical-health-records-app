import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const RADIAN = Math.PI / 180
const COLORS = [' #C70039', ' #900C3F ', '#581845', '#FF5733']

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	)
}

export default function PieChartStats3() {
	const [allergyData, setAllergyData] = useState([]);

	useEffect(() => {
	  const fetchAllergyData = async () => {
		try {
		  const res = await axios.get('http://localhost:3500/api/allergy_data');
		  setAllergyData(res.data);
		//   console.log(res.data);
		} catch (err) {
		  console.log(err);
		}
	  };
	  fetchAllergyData();
	}, []);
	return (
		<div className="w-[20rem] h-[22rem] bg-white p-4 rounded-xl shadow-lg flex flex-col">
			<strong className="text-gray-700 text-sm text-center font-bold">ALLERGEN STATISTICS</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart width={400} height={300}>
						<Pie
							data={allergyData}
							cx="50%"
							cy="45%"
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={105}
							fill="#8884d8"
							dataKey="value"
						>
							{allergyData.map((_, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}