import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import BarChartStats from '../components/BarChartStats'
import PieChartStats from '../components/PieChartStats'
import PieChartStats2 from '../components/PieChartStats2'
import PieChartStats3 from '../components/PieChartStats3'
import PieChartStats4 from '../components/PieChartStats4'

export default function Overview() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className=''>
				<BarChartStats />
			</div>
			<div className="flex flex-row gap-4 w-full justify-left">
				{/* <PieChartStats /> */}
				<PieChartStats2 />
				<PieChartStats3 />
				<PieChartStats4 />
			</div>
		</div>
	)
}