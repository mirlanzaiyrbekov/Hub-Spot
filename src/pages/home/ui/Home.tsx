import { SalesChart, VisitsChart } from "@/features"
import { DashbiardAnalityc } from "@/widgets"
import { FC } from "react"

export const Home: FC = () => {
	return (
		<>
			<section>
				<div className="grid grid-cols-2 gap-2">
					{/* SALE CHART */}
					<SalesChart />
					<VisitsChart />
				</div>
				{/* DASHBOARD STATS */}
				<DashbiardAnalityc />
			</section>
		</>
	)
}
