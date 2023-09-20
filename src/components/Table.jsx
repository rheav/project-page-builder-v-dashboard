const Table = ({ cardData }) => {
	return (
		<table className="table-auto w-full border border-gray-200 shadow-md  ">
			<thead className="h-10 lg:h-12">
				<tr className="text-xl text-white bg-gradient-to-r from-startCold to-endCold lowercase">
					<th className="font-light ">Posição</th>
					<th className="font-light ">Página</th>
					<th className="font-light ">Acessos</th>
				</tr>
			</thead>
			<tbody>
				{cardData.map((item, index) => (
					<tr key={index}>
						{/* Posição */}
						<td className="text-center  lg:text-lg font-bold text-blue-600">{item.pagePosition}</td>

						{/* Página */}
						<td className="lg:text-lg text-gray-500 text-center">
							<a href="#" className="hover:text-blue-400">
								{item.pageTitle}
							</a>
						</td>

						{/* Acessos */}
						<td className="py-2 lg:text-lg text-gray-600 text-center">{item.pageAcessos}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
