import { StatChart } from "@/features"
import {
	DashbiardAnalityc,
	PlanCard,
	RevenueCard,
	VisitorsCard,
} from "@/widgets"
import { FC } from "react"

export const Home: FC = () => {
	return (
		<>
			<section className="grid grid-cols-1 gap-y-2">
				<div className="grid grid-cols-4 gap-2">
					{/* REVENUES */}
					<RevenueCard />
					{/* VISITORS */}
					<VisitorsCard />
					{/* PLANCARD */}
					<PlanCard />
				</div>
				<StatChart />
				{/* DASHBOARD STATS */}
				<DashbiardAnalityc />
			</section>
		</>
	)
}
