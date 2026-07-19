import { Home, NotFound } from "@/pages"
import { UsersPage } from "@/pages/users/ui/Users"
import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./Layout"

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/users",
				element: <UsersPage />,
				errorElement: <NotFound />,
			},
		],
		errorElement: <NotFound />,
	},
])
