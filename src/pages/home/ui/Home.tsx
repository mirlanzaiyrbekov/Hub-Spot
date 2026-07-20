import { StatChart } from "@/features"
import { DashbiardAnalityc, RevenueCard, VisitorsCard } from "@/widgets"
import { FC } from "react"

export const Home: FC = () => {
	return (
		<>
			<section className="grid grid-cols-1 gap-y-2">
				<div className="grid grid-cols-2 gap-2">
					{/* REVENUES */}
					<RevenueCard />
					{/* VISITORS */}
					<VisitorsCard />
				</div>
				<div>
					<StatChart />
				</div>
				{/* DASHBOARD STATS */}
				<DashbiardAnalityc />
			</section>
		</>
	)
}
