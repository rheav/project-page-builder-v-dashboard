import Layout from "./blocks/Layout";
import Sidebar from "./blocks/Sidebar";

function App() {
	return (
		<main className="flex">
			<Sidebar />
			<Layout />
		</main>
	);
}

export default App;
