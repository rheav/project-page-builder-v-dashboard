const Table = ({ cardData }) => {
	return (
		<table className="table-fixed w-full border border-gray-200 shadow-md">
			<thead className=" h-[3rem]">
				<tr className="text-xl text-white bg-gradient-to-r from-startCold to-endCold lowercase">
					<th className="font-light ">Posição</th>
					<th className="font-light ">Página</th>
					<th className="font-light ">Acessos</th>
				</tr>
			</thead>
			<tbody>
				{cardData.map((item, index) => (
					<tr
						key={index}
						className={index % 2 ? "bg-slate-50" : "bg-blue-50"}
					>
						{/* Posição */}
						<td className=" text-center text-2xl font-bold text-blue-600 py-5">{item.pagePosition}</td>

						{/* Página */}
						<td className="text-xl text-gray-600 text-center py-5">
							<a
								href="#"
								className="hover:text-blue-400"
							>
								{item.pageTitle}
							</a>
						</td>

						{/* Acessos */}
						<td className="text-xl text-gray-600 text-center py-5">{item.pageAcessos}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
