import Card from "../components/Card";
import CardWide from "../components/CardWide";

const Overview = () => {
	return (
		<section className="h-screen p-6">
			<div className="grid w-full grid-cols-1 row-span-1 gap-3 md:grid-cols-4 justify-items-center">
				<Card
					cardData="178,901"
					infoType="total no mês"
					bgGradient
				>
					Sessões
				</Card>
				<Card
					cardData="15.6%"
					infoType="média"
					bgGradient
				>
					Conversão
				</Card>
				<Card
					cardData="49.4min"
					infoType="média"
					bgGradient
				>
					Tempo na pág.
				</Card>
				<Card
					cardData="35.7%"
					infoType="média"
					bgGradient
				>
					Bounce
				</Card>
			</div>
			<div className="grid w-full grid-cols-1 row-span-1 gap-5 mt-5 mb-10 lg:grid-cols-2 xl:grid-cols-4 justify-items-center">
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
			</div>
		</section>
	);
};

export default Overview;
