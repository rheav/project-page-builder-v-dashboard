// Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
	return (
		<div className="w-full">
			<main className="">
				<Header sectionTitle="Inicio" />
				<Outlet /> {/* This is where different content will be rendered */}
			</main>
		</div>
	);
}

export default Layout;
