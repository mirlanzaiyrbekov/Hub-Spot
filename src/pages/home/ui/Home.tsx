import { StatChart } from "@/features"
import {
	DashbiardAnalityc,
	RecordCardStat,
	RecordedCard,
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
					<RecordCardStat />
					<RecordedCard />
				</div>
			</section>
			<section>
				<StatChart />
			</section>
			<section>
				{/* DASHBOARD STATS */}
				<DashbiardAnalityc />
			</section>
		</>
	)
}
