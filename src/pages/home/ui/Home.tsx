import {
	Badge,
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared"
import { DashbiardAnalityc } from "@/widgets"
import { TrendingDown, TrendingUp } from "lucide-react"
import { FC } from "react"

export const Home: FC = () => {
	return (
		<>
			<section className="grid grid-cols-1 gap-y-2">
				<div className="grid grid-cols-2 gap-2">
					<Card className="@container/card rounded-none border border-dashed shadow-none">
						<CardHeader>
							<CardDescription>Общая прибыль</CardDescription>
							<CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
								$1,250.00
							</CardTitle>
							<CardAction>
								<Badge variant="outline" className="text-green-500">
									<TrendingUp />
									+12.5%
								</Badge>
							</CardAction>
						</CardHeader>
						<CardFooter className="flex-col items-start gap-1.5 text-sm">
							<div className="line-clamp-1 flex gap-2 font-medium">
								Тенденция к росту в этом месяце
								<TrendingUp className="size-4 text-green-500" />
							</div>
							<div className="text-muted-foreground">
								Посетители за последние 6 месяцев
							</div>
						</CardFooter>
					</Card>
					<Card className="@container/card rounded-none border border-dashed shadow-none">
						<CardHeader>
							<CardDescription>Клиентура</CardDescription>
							<CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
								1,234
							</CardTitle>
							<CardAction>
								<Badge variant="outline" className="text-red-500">
									<TrendingDown />
									-20%
								</Badge>
							</CardAction>
						</CardHeader>
						<CardFooter className="flex-col items-start gap-1.5 text-sm">
							<div className="line-clamp-1 flex gap-2 font-medium">
								Снижение на 20 % за этот период
								<TrendingDown className="size-4 text-red-500" />
							</div>
							<div className="text-muted-foreground">
								Приобретению нужно уделить внимание
							</div>
						</CardFooter>
					</Card>
				</div>
				{/* DASHBOARD STATS */}
				<DashbiardAnalityc />
			</section>
		</>
	)
}
