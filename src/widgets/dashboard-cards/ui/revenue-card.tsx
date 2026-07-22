import {
	Badge,
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared"
import { TrendingUp } from "lucide-react"
import { FC } from "react"

export const RevenueCard: FC = () => {
	return (
		<Card className="@container/card shadow-xs rounded-md">
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
					Наблюдается рост выручки за последние 6 месяцев
				</div>
			</CardFooter>
		</Card>
	)
}
