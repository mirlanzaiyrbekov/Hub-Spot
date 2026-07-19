import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/shared"
import { FC } from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const chartData = [
	{ month: "Январь", visits: 186 },
	{ month: "Февраль", visits: 305 },
	{ month: "Март", visits: 237 },
	{ month: "Апрель", visits: 73 },
	{ month: "Май", visits: 209 },
	{ month: "Июнь", visits: 214 },
]
const chartConfig = {
	visits: {
		label: "Посещения",
		color: "#5c1987",
	},
} satisfies ChartConfig

export const VisitsChart: FC = () => {
	return (
		<div className="border border-dashed p-8">
			<h5 className="flex items-center justify-between gap-2">
				<span className="font-bold ">Посещения</span>
				<strong className="text-xs text-textcolor border border-dashed p-2 border-textcolor">
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
					<Bar dataKey="visits" fill="var(--color-visits)" radius={4} />
				</BarChart>
			</ChartContainer>
		</div>
	)
}
