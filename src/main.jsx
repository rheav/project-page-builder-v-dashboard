import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// 1 - configurei router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pages from "./routes/Pages.jsx";
import Overview from "./routes/Overview.jsx";
import PagesNew from "./routes/PagesNew.jsx";
import FoldersNew from "./routes/FoldersNew.jsx";

const router = createBrowserRouter([
	{
		key: "1",
		path: "/",
		element: <App />,
		children: [
			{ key: "pages", index: true, element: <Overview /> }, // Nested route for "/paginas"
		],
	},
	{
		key: "2",
		path: "/paginas",
		element: <App />,
		children: [
			{ key: "pages", index: true, element: <Pages /> }, // Nested route for "/paginas"
		],
	},
	{
		key: "3",
		path: "/paginas/nova-pagina",
		element: <App />,
		children: [
			{ key: "pages", index: true, element: <PagesNew /> }, // Nested route for "/paginas"
		],
	},
	{
		key: "3",
		path: "/paginas/nova-pasta",
		element: <App />,
		children: [
			{ key: "pages", index: true, element: <FoldersNew /> }, // Nested route for "/paginas"
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
