import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'



// LAB TESTS
const data = [
	{
		name: 'Jan',
		Male: 4000,
		Female: 2400
	},
	{
		name: 'Feb',
		Male: 3000,
		Female: 1398
	},
	{
		name: 'Mar',
		Male: 2000,
		Female: 9800
	},
	{
		name: 'Apr',
		Male: 2780,
		Female: 3908
	},
	{
		name: 'May',
		Male: 1890,
		Female: 4800
	},
	{
		name: 'Jun',
		Male: 2390,
		Female: 3800
	},
	{
		name: 'July',
		Male: 3490,
		Female: 4300
	},
	{
		name: 'Aug',
		Male: 2000,
		Female: 9800
	},
	{
		name: 'Sep',
		Male: 2780,
		Female: 3908
	},
	{
		name: 'Oct',
		Male: 1890,
		Female: 4800
	},
	{
		name: 'Nov',
		Male: 2390,
		Female: 3800
	},
	{
		name: 'Dec',
		Male: 3490,
		Female: 4300
	}
]

export default function BarChartStats() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-xl shadow-lg flex flex-col flex-1">
			<strong className="text-gray-700 text-sm font-bold">PATIENTS</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Female" fill="#0ea5e9" />
						<Bar dataKey="Male" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}