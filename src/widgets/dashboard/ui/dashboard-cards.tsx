import { Customers, Entries, InsightsCard, Revenues } from "@/widgets/cards"
import { FC } from "react"

export const DashboardCards: FC = () => {
	return (
		<div className="grid grid-cols-4 gap-1.5">
			<Revenues />
			<Customers />
			<Entries />
			<InsightsCard />
		</div>
	)
}
