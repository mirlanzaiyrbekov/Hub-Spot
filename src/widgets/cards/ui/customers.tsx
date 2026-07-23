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

export const Customers: FC = () => {
	return (
		<Card className="@container/card shadow-xs rounded-md">
			<CardHeader>
				<CardDescription>Клиенты</CardDescription>
				<CardTitle className="text-2xl font-bold tabular-nums @[250px]/card:text-3xl">
					15
				</CardTitle>
				<CardAction>
					<Badge variant="outline" className="text-green-500">
						<TrendingUp className="size-4" />
						+3
					</Badge>
				</CardAction>
			</CardHeader>
			<CardFooter className="flex-col items-start gap-1 text-sm">
				<div className="font-medium">
					Новых: <span className="font-semibold">5</span>
				</div>
				<div className="text-muted-foreground">Постоянных: 10</div>
			</CardFooter>
		</Card>
	)
}
