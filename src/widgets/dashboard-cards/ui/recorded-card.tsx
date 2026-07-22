import {
	Badge,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared"
import { Clock3, Scissors } from "lucide-react"
import { FC } from "react"

export const RecordedCard: FC = () => {
	return (
		<Card className="flex h-62.5 flex-col rounded-lg shadow-sm">
			<CardHeader>
				<CardDescription>Последняя запись</CardDescription>

				<CardTitle className="flex items-center gap-2 text-3xl font-bold">
					<Clock3 className="size-6 text-muted-foreground" />
					21:45
				</CardTitle>
			</CardHeader>

			<CardContent className="flex-1 space-y-1">
				<div className="space-y-2">
					<div className="flex items-center gap-2 text-sm text-muted-foreground">
						<Scissors className="size-4" />
						<span>Услуга</span>
					</div>

					<Badge
						variant="secondary"
						className="max-w-full whitespace-normal line-clamp-2"
					>
						Полный набор мастера маникюра · John Doe
					</Badge>
				</div>

				<div className="space-y-2">
					<div className="flex items-center justify-between text-sm">
						<span className="text-muted-foreground">Стоимость</span>

						<span className="font-semibold">
							1 658
							<span className="ml-1 text-xs font-normal text-muted-foreground">
								KGS
							</span>
						</span>
					</div>

					<div className="flex items-center justify-between text-sm">
						<span className="text-muted-foreground">Ваш доход</span>

						<span className="font-semibold text-emerald-600 dark:text-emerald-400">
							250.23
							<span className="ml-1 text-xs font-normal">KGS</span>
						</span>
					</div>
				</div>
			</CardContent>

			<CardFooter className="border-t pt-2 text-xs text-muted-foreground">
				<span>250.23 KGS из 1 658 KGS</span>
			</CardFooter>
		</Card>
	)
}
