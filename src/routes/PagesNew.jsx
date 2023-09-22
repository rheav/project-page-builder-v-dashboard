import BtnGradient from "../components/BtnGradient";

function PagesNew() {
	return (
		<section className="flex flex-col flex-1 h-screen">
			<div className="flex justify-between h-40 px-10 border-b-2 border-gray-300 shadow-md">
				<div>
					<h2 className="py-5 font-bold text-transparent lg:text-4xl bg-clip-text bg-gradient-to-r from-startCold to-endCold">
						Suas páginas
					</h2>
					<BtnGradient itemRoute="/paginas/">Voltar</BtnGradient>
				</div>
			</div>
		</section>
	);
}

export default PagesNew;
