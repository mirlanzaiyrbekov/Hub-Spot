import { DashboardCards } from "@/widgets"
import { FC } from "react"

export const Home: FC = () => {
	return (
		<>
			<section className="grid grid-cols-1 gap-y-2">
				<DashboardCards />
				{/* <div className="grid grid-cols-4 gap-2">
					<RevenueCard />
					<VisitorsCard />
					<RecordCardStat />
					<RecordedCard />
				</div> */}
			</section>
			{/* <section>
				<StatChart />
			</section> */}
			<section>{/* <BusinessOverview /> */}</section>
		</>
	)
}
