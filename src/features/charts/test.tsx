import {
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "@/shared"
import { FC } from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const chartData = [
	{ month: "Январь", revenue: 186, expenses: 80 },
	{ month: "Февраль", revenue: 305, expenses: 200 },
	{ month: "Март", revenue: 237, expenses: 120 },
	{ month: "Апрель", revenue: 73, expenses: 190 },
	{ month: "Май", revenue: 209, expenses: 130 },
	{ month: "Июнь", revenue: 214, expenses: 140 },
	{ month: "Июль", revenue: 320, expenses: 50 },
]
const chartConfig = {
	revenue: {
		label: "Доходы",
		color: "#2563eb",
	},
	expenses: {
		label: "Расходы",
		color: "#60a5fa",
	},
} satisfies ChartConfig

export const TestChart: FC = () => {
	return (
		<ChartContainer config={chartConfig} className="w-full h-full">
			<BarChart accessibilityLayer data={chartData}>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey="month"
					tickLine={false}
					tickMargin={10}
					axisLine={false}
					tickFormatter={(value) => value.slice(0, 3)}
				/>
				<ChartTooltip content={<ChartTooltipContent />} />
				<ChartLegend content={<ChartLegendContent />} />
				<Bar dataKey="revenue" fill="#2563eb" radius={4} />
				<Bar dataKey="expenses" fill="#60a5fa" radius={4} />
			</BarChart>
		</ChartContainer>
	)
}
