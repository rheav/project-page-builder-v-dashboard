// Layout.jsx
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<div className="w-full">
			<Outlet /> {/* This is where different content will be rendered */}
		</div>
	);
}

export default Layout;
