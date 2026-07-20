import {
	Badge,
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared"
import { TrendingDown } from "lucide-react"
import { FC } from "react"

export const VisitorsCard: FC = () => {
	return (
		<Card className="@container/card shadow-xs rounded-md">
			<CardHeader>
				<CardDescription>Клиентура</CardDescription>
				<CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
					13 - 43
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
					Привличению нужно уделить внимание
				</div>
			</CardFooter>
		</Card>
	)
}
