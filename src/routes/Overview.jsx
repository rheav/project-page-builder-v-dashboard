import Card from "../components/Card";
import CardWide from "../components/CardWide";
import { RxThickArrowUp } from "react-icons/rx";

const Overview = () => {
	return (
		<main className="	">
			<div className="grid grid-cols-4 gap-x-5 justify-items-center row-span-1">
				<Card
					cardData="178,901"
					infoType="total no mês"
				>
					Sessões
				</Card>
				<Card
					cardData="15.6%"
					infoType="média"
				>
					Conversão
				</Card>
				<Card
					cardData="49.4min"
					infoType="média"
				>
					Tempo na pág.
				</Card>
				<Card
					cardData="bom"
					infoType=""
				>
					Teste
				</Card>
			</div>
			<div className="grid grid-cols-4 gap-x-5 justify-items-center mt-5 mb-10 row-span-1">
				<CardWide
					cardData={[
						{ pagePosition: "1", pageTitle: "Método PlayMais", pageAcessos: "19458" },
						{ pagePosition: "2", pageTitle: "Pacote Photoshop Plus", pageAcessos: "16458" },
						{ pagePosition: "3", pageTitle: "Vendas Atômicas", pageAcessos: "14458" },
						{ pagePosition: "4", pageTitle: "Upsell - Método PlayMais", pageAcessos: "12458" },
					]}
					infoType="últimas 24h"
				>
					Páginas mais visitadas
				</CardWide>
				<Card
					cardData="bom"
					infoType=""
				>
					Teste
				</Card>
			</div>
		</main>
	);
};

export default Overview;
