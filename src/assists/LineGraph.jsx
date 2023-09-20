import { Card, LineChart } from "@tremor/react";

const chartdata = [
	{
		mês: "jan",
		"Método PlayMais": 2.04,
		"Pacote Photoshop Plus": 0.53,
		"Vendas Atômicas": 0.43,
	},
	{
		mês: "fev",
		"Método PlayMais": 1.96,
		"Pacote Photoshop Plus": 2.58,
		"Vendas Atômicas": 2.18,
	},
	{
		mês: "mar",
		"Método PlayMais": 3.96,
		"Pacote Photoshop Plus": 1.61,
		"Vendas Atômicas": 1.41,
	},
	{
		mês: "abr",
		"Método PlayMais": 2.93,
		"Pacote Photoshop Plus": 1.61,
		"Vendas Atômicas": 1.11,
	},
	{
		mês: "mai",
		"Método PlayMais": 2.88,
		"Pacote Photoshop Plus": 1.67,
		"Vendas Atômicas": 1.27,
	},
];

const dataFormatter = (number) => `${Intl.NumberFormat("us").format(number).toString()}%`;

const LineGraph = () => {
	return (
		<Card>
			<h2 className="text-2xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-startCold to-endCold lowercase">Top #3 Páginas</h2>
			<LineChart
				className="max-h-40"
				data={chartdata}
				index="mês"
				categories={["Método PlayMais", "Pacote Photoshop Plus", "Vendas Atômicas"]}
				colors={["sky", "purple", "emerald"]}
				valueFormatter={dataFormatter}
				yAxisWidth={40}
			/>
		</Card>
	);
};

export default LineGraph;
