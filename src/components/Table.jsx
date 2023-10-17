const Table = ({ cardData }) => {
	return (
		<table className="w-full">
			<thead className="h-10 lg:h-12">
				<tr className="text-sm text-white lowercase bg-gradient-to-r from-startCold to-endCold">
					<th className="font-light rounded-tl-lg">Posição</th>
					<th className="font-light">Página</th>
					<th className="font-light rounded-tr-lg">Acessos</th>
				</tr>
			</thead>
			<tbody className="">
				{cardData.map((item, index) => (
					<tr
						key={index}
						className="border border-slate-200"
					>
						{/* Posição */}
						<td className="font-bold text-center text-blue-600 lg:text-sm">{item.pagePosition}</td>

						{/* Página */}
						<td className="text-center text-gray-500 lg:text-xs">
							<a
								href="#"
								className="hover:text-blue-400"
							>
								{item.pageTitle}
							</a>
						</td>

						{/* Acessos */}
						<td className="py-2 text-center text-gray-600 lg:text-sm ">{item.pageAcessos}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
