import { chartData } from "@/features"
import {
	Badge,
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	ChartContainer,
} from "@/shared"
import { TrendingUp } from "lucide-react"
import { FC } from "react"
import { Area, AreaChart, CartesianGrid } from "recharts"

export const Revenues: FC = () => {
	return (
		<Card className="@container/card shadow-xs rounded-md">
			<CardHeader>
				<CardDescription>Доход</CardDescription>
				<CardTitle className="text-2xl font-bold tabular-nums @[250px]/card:text-3xl">
					18 500 сом
				</CardTitle>
				<CardAction>
					<Badge variant="outline" className="text-green-500">
						<TrendingUp className="size-4" />
						+12%
					</Badge>
				</CardAction>
			</CardHeader>
			<CardContent>
				<ChartContainer
					config={{
						revenue: {
							label: "Прибыль",
							color: "#5c1987",
						},
					}}
					className="aspect-auto h-20 w-full"
				>
					<AreaChart data={chartData}>
						<defs>
							<linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
								<stop
									offset="5%"
									stopColor="var(--color-visitors)"
									stopOpacity={1.0}
								/>
								<stop
									offset="95%"
									stopColor="var(--color-visitors)"
									stopOpacity={0.1}
								/>
							</linearGradient>
							<linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
								<stop
									offset="5%"
									stopColor="var(--color-revenue)"
									stopOpacity={0.8}
								/>
								<stop
									offset="95%"
									stopColor="var(--color-revenue)"
									stopOpacity={0.1}
								/>
							</linearGradient>
						</defs>
						<CartesianGrid vertical={false} />

						<Area
							dataKey="revenue"
							type="natural"
							fill="url(#fillMobile)"
							stroke="var(--color-revenue)"
							stackId="a"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-start gap-1 text-sm">
				<div className="font-medium">
					Сегодня: <span className="font-semibold">18 500 сом</span>
				</div>
				<div className="text-muted-foreground">
					Вчера: 16 200 сом • Месяц: 420 000 сом
				</div>
			</CardFooter>
		</Card>
	)
}
