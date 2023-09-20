// Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
	return (
		<div className="w-full h-full">
			<Header sectionTitle="Inicio" />
			<main className="px-10 pt-5">
				<Outlet /> {/* This is where different content will be rendered */}
			</main>
		</div>
	);
}

export default Layout;
