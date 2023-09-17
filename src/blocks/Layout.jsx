// Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
	return (
		<div className="w-full">
			<Header sectionTitle="Inicio" />
			<main>
				<Outlet /> {/* This is where different content will be rendered */}
			</main>
		</div>
	);
}

export default Layout;
