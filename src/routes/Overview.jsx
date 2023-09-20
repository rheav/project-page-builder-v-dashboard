import Card from "../components/Card";
import CardWide from "../components/CardWide";

const Overview = () => {
	return (
		<section className="h-screen flex flex-col justify-center items-center px-10">
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 justify-items-center row-span-1 w-full">
				<Card cardData="178,901" infoType="total no mês">
					Sessões
				</Card>
				<Card cardData="15.6%" infoType="média">
					Conversão
				</Card>
				<Card cardData="49.4min" infoType="média">
					Tempo na pág.
				</Card>
				<Card cardData="35.7%" infoType="média">
					Bounce
				</Card>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 justify-items-center row-span-1 mt-5 mb-10 w-full">
				<CardWide
					cardData={[
						{ pagePosition: "1", pageTitle: "Método PlayMais", pageAcessos: "19458" },
						{ pagePosition: "2", pageTitle: "Pacote Photoshop Plus", pageAcessos: "16458" },
						{ pagePosition: "3", pageTitle: "Vendas Atômicas", pageAcessos: "14458" },
						{ pagePosition: "4", pageTitle: "Upsell - Método PlayMais", pageAcessos: "12458" },
						{ pagePosition: "5", pageTitle: "VSL - Projeto Verão", pageAcessos: "11458" },
					]}
					infoType="últimas 24h"
				>
					Páginas mais visitadas
				</CardWide>
				<Card cardData="99.6%" infoType="médio">
					upTime
				</Card>
			</div>
		</section>
	);
};

export default Overview;
