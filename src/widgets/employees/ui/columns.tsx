import { IEmployee } from "@/entities/employees/types/employees.type"
import { Checkbox } from "@/shared"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<IEmployee>[] = [
	{
		id: "select",
		accessorKey: "id",
		header: ({ table }) => (
			<div>
				<Checkbox
					checked={
						table.getIsAllPageRowsSelected() ||
						(table.getIsSomePageRowsSelected() && "indeterminate")
					}
					onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
					aria-label="Выбрать все"
				/>
			</div>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Выбрать колонку"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "firstName",
		header: "Имя",
	},
	{
		accessorKey: "working",
		header: "Статус работы",
		cell: ({ row }) => {
			const working = row.original.working
			return (
				<>
					{working ? (
						<span className="text-green-500">Работает</span>
					) : (
						<span className="text-purple-500">Не в смене</span>
					)}
				</>
			)
		},
	},

	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "phone",
		header: "Телефон",
	},
]
