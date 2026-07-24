import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared"
import { ChevronRightIcon, Minus, TriangleAlert } from "lucide-react"
import { FC } from "react"

export const InsightsCard: FC = () => {
	return (
		<Card className="@container/card shadow-xs rounded-md gap-3.5 py-3">
			<CardHeader>
				<CardDescription className="flex items-center gap-2">
					<TriangleAlert className="size-4 text-red-700" />
					Требует внимания
				</CardDescription>
				<CardTitle className="text-2xl font-bold tabular-nums @[250px]/card:text-3xl">
					<div className="flex items-center gap-1.5 text-red-700">
						<Minus className="size-5 mt-1" />
						4.320 сом
					</div>
				</CardTitle>
			</CardHeader>
			<CardFooter className="flex-col items-start gap-1 text-sm">
				<h5>Причины:</h5>
				<div className="flex items-center gap-1.5">
					<ChevronRightIcon className="mt-0.5 size-2 shrink-0" />
					<span className="text-muted-foreground">Записи не подтверждены:</span>
					<b className="flex items-center gap-0.5">2 </b>
				</div>
				<div className="flex items-center gap-1.5">
					<ChevronRightIcon className="mt-0.5 size-2 shrink-0" />
					<span className="text-muted-foreground">Отменены записей:</span>
					<b className="flex items-center gap-0.5">4</b>
				</div>
				<div className="flex items-center gap-1.5">
					<ChevronRightIcon className="mt-0.5 size-2 shrink-0" />
					<span className="text-muted-foreground">
						Клиент не посещал более 60 дней:
					</span>
					<b className="flex items-center gap-0.5">1</b>
				</div>
			</CardFooter>
		</Card>
	)
}
