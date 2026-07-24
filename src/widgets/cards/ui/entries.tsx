import {
	Badge,
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared"
import {
	Check,
	ChevronRightIcon,
	ClipboardPen,
	Plus,
	TrendingUp,
} from "lucide-react"
import { FC } from "react"

export const Entries: FC = () => {
	return (
		<Card className="@container/card shadow-xs rounded-md gap-3.5 py-3">
			<CardHeader>
				<CardDescription>Записи</CardDescription>
				<CardTitle className="text-2xl font-bold tabular-nums @[250px]/card:text-3xl">
					<div className="flex items-center gap-1.5">
						26
						<ClipboardPen className="size-5" />
					</div>
				</CardTitle>
				<CardAction>
					<Badge variant="outline" className="text-red-700">
						2 отмены
					</Badge>
				</CardAction>
			</CardHeader>
			<CardFooter className="flex-col items-start gap-1 text-sm">
				<div className="text-muted-foreground flex items-center gap-1.5">
					<ChevronRightIcon className="mt-0.5 size-2 shrink-0" />
					Сегодня:
					<b className="flex items-center gap-0.5">
						<Plus className="size-3 text-green-600" />6
					</b>
				</div>
				<div className="text-muted-foreground flex items-center gap-1.5">
					<ChevronRightIcon className="mt-0.5 size-2 shrink-0" />
					Записей на завтра:
					<b className="flex items-center gap-0.5">
						<Check className="size-3 text-green-600" />
						14
					</b>
				</div>
				<div className="text-muted-foreground flex items-center gap-1.5">
					<ChevronRightIcon className="mt-0.5 size-2 shrink-0" />
					Всего записей за прошлый месяц:
					<b className="flex items-center gap-0.5">
						<TrendingUp className="size-3 text-green-600" />
						78
					</b>
				</div>
			</CardFooter>
		</Card>
	)
}
