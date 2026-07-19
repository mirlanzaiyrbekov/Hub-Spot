import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
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
]
const chartConfig = {
	revenue: {
		label: "Доходы",
		color: "#0e3b83",
	},
	expenses: {
		label: "Расходы",
		color: "#970d93",
	},
} satisfies ChartConfig

export const SalesChart: FC = () => {
	return (
		<div className="border border-dashed p-8">
			<h5 className="flex items-center justify-between gap-2">
				<span className="font-bold ">Финансы компании</span>
				<strong className="text-xs text-textcolor border border-dashed p-2 border-gray-300">
					За последние 6 месяцев
				</strong>
			</h5>
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
					{/* <ChartLegend content={<ChartLegendContent />} align="right" /> */}
					<Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
					<Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
				</BarChart>
			</ChartContainer>
		</div>
	)
}
