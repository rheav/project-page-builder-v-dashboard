import Card from "../components/Card";

const Overview = () => {
	return (
		<main className="grid grid-cols-4 justify-items-center py-10">
			<Card>Acessos:</Card>
			<Card>Conversão (média)</Card>
			<Card>Tempo na pág. (média)</Card>
			<Card>Tempo de carregamento (médio)</Card>
		</main>
	);
};

export default Overview;
