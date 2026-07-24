import { RevenueChart } from "@/features"
import { DashboardCards } from "@/widgets"
import { columns, DataTable } from "@/widgets/employees"
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
				<DataTable
					data={[
						{
							age: 31,
							email: "mirlan@gmail.com",
							firstName: "Mirlan",
							id: 1,
							image: "",
							lastName: "Mambetov",
							phone: "0505342345",
							working: true,
							address: {
								city: "Bishkek",
								postalCode: "412421",
								state: "Chui",
								stateCode: "312",
								street: "Phuchic",
							},
						},
						{
							age: 22,
							email: "mirlan@gmail.com",
							firstName: "Mirlan2",
							id: 33,
							image: "",
							lastName: "Mambetov",
							phone: "0505342345",
							working: false,
							address: {
								city: "Bishkek",
								postalCode: "412421",
								state: "Chui",
								stateCode: "312",
								street: "Phuchic",
							},
						},
						{
							age: 21,
							email: "prince@gmail.com",
							firstName: "Prince",
							id: 23,
							image: "",
							lastName: "Prince2",
							phone: "0521456652",
							working: true,
							address: {
								city: "Bishkek",
								postalCode: "412421",
								state: "Chui",
								stateCode: "312",
								street: "Phuchic",
							},
						},
					]}
					columns={columns}
				/>
			</section>
		</>
	)
}
