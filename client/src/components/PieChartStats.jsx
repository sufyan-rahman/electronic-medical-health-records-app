import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const data = [
	{ name: 'Diabetes', value: 540 },
	{ name: 'Influenza', value: 620 },
	{ name: 'Cancer', value: 210 },
	{ name: 'HIV', value: 210 }
]

const RADIAN = Math.PI / 180
const COLORS = ['#a989fa', '#3b0faa', '#7556f7']

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

export default function PieChartStats() {
	return (
		<div className='flex gap-4'>
			<div className="w-[20rem] h-[22rem] bg-white p-4 rounded-xl shadow-lg flex flex-col">
				<strong className="text-gray-700 text-sm font-bold text-center">COMMON DIESEASES</strong>
				<div className="mt-3 w-full flex-1 text-xs">
					<ResponsiveContainer width="100%" height="100%">
						<PieChart width={400} height={300}>
							<Pie
								data={data}
								cx="50%"
								cy="45%"
								labelLine={false}
								label={renderCustomizedLabel}
								outerRadius={105}
								fill="#8884d8"
								dataKey="value"
							>
								{data.map((_, index) => (
									<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
								))}
							</Pie>
							<Legend />
						</PieChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	)
}