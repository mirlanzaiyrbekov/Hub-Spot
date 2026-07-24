import { RevenueChart } from "@/features"
import { BusinessOverview, DashboardCards } from "@/widgets"
import { FC } from "react"

export const Home: FC = () => {
	return (
		<>
			<section>
				<DashboardCards />
			</section>
			<section>
				<RevenueChart />
			</section>
			<section>
				<BusinessOverview />
			</section>
		</>
	)
}
