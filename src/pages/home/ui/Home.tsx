import { SalesChart } from "@/features"
import { DashboardStats } from "@/widgets"
import { FC } from "react"

export const Home: FC = () => {
	return (
		<>
			<section>
				{/* DASHBOARD STATS */}
				<DashboardStats />
				{/* SALE CHART */}
				<div className="grid grid-cols-2">
					<SalesChart />
				</div>
			</section>
		</>
	)
}
