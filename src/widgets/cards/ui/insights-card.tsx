import {
	Button,
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared"
import { ChevronRightIcon, TriangleAlert } from "lucide-react"
import { FC } from "react"

export const InsightsCard: FC = () => {
	return (
		<Card className="@container/card shadow-xs rounded-md gap-3.5 py-3">
			<CardHeader>
				<CardDescription className="flex items-center gap-2">
					<TriangleAlert className="size-4 text-red-500" />
					Требует внимания
				</CardDescription>
				<CardTitle />
				<CardAction></CardAction>
			</CardHeader>
			<CardFooter className="flex-col items-start gap-1 text-sm">
				<div className="text-muted-foreground flex items-center gap-1.5">
					<ChevronRightIcon className="mt-0.5 size-2 shrink-0" />
					Записи не подтверждены:
					<b className="flex items-center gap-0.5">2 </b>
				</div>
				<div className="text-muted-foreground flex items-center gap-1.5">
					<ChevronRightIcon className="mt-0.5 size-2 shrink-0" />
					Отменены записей:
					<b className="flex items-center gap-0.5">4</b>
				</div>
				<div className="text-muted-foreground flex items-center gap-1.5">
					<ChevronRightIcon className="mt-0.5 size-2 shrink-0" />
					Клиент не посещал более 60 дней:
					<b className="flex items-center gap-0.5">1</b>
				</div>
				<div className="text-muted-foreground flex items-center gap-1.5">
					<ChevronRightIcon className="mt-0.5 size-2 shrink-0" />
					Сотрудник не вышел на смену:
					<b className="flex items-center gap-0.5">John Doe</b>
				</div>
				<Button
					variant="outline"
					className="rounded-sm flex items-center w-full my-2 p-4"
					size="xs"
				>
					Исправить
					<ChevronRightIcon className="size-3 mt-1" />
				</Button>
			</CardFooter>
		</Card>
	)
}
