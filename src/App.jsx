import Layout from "./blocks/Layout";
import Sidebar from "./blocks/Sidebar";

function App() {
	return (
		<main className="flex h-screen overflow-hidden">
			<Sidebar />
			<Layout />
		</main>
	);
}

export default App;
