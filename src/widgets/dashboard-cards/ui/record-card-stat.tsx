import {
	Badge,
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared"
import { TrendingUp } from "lucide-react"
import { FC } from "react"

export const RecordCardStat: FC = () => {
	return (
		<Card className="@container/card shadow-xs rounded-md">
			<CardHeader>
				<CardDescription>Количество записей</CardDescription>
				<CardTitle className="text-2xl font-semibold tabular-nums">
					15
				</CardTitle>
			</CardHeader>
			<CardFooter className="flex-col items-start gap-1.5 text-sm">
				<div className="flex items-center gap-2">
					По сравнениию вчерашним днем
					<Badge variant="outline" className="text-green-500">
						<TrendingUp />
						+12.5%
					</Badge>
				</div>
				<div className="flex items-center gap-1.5 text-sm">
					<span className="text-muted-foreground">Предполагаемый доход</span>
					<span className="text-base font-medium">
						6342.0 <b>KGS</b>
					</span>
				</div>
			</CardFooter>
		</Card>
	)
}
