const Table = ({ cardData }) => {
	return (
		<table className="table-auto ">
			<thead className="">
				<tr className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-startCold to-endCold lowercase">
					<th className="font-medium ">Posição</th>
					<th className="font-medium ">Página</th>
					<th className="font-medium ">Acessos</th>
				</tr>
			</thead>
			<tbody>
				{cardData.map((item, index) => (
					<tr key={index}>
						<td className=" text-center text-2xl font-bold text-blue-600">{item.pagePosition}</td>
						<td className="text-xl text-gray-600">{item.pageTitle}</td>
						<td className="text-xl text-gray-600 ">{item.pageAcessos}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
