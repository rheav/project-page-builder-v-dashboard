import LiveDataDot from "../assists/LiveDataDot";

const MyCard = ({ children, cardData, infoType }) => {
	return (
		<div className="relative border border-gray-300 rounded-lg shadow-md overflow-hidden transition w-full">
			<div className="py-2 lg:py-4 px-8 lg:px-4">
				<div className="my-1">
					<div className="whitespace-nowrap">
						<h2 className="text-2xl xl:text-2xl 2xl:text-3xl font-md mb-0 relative inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-startCold to-endCold lowercase">
							{/* Título */}
							{children} <LiveDataDot />
						</h2>
					</div>
					{/* subtítulo */}
					<div className="mb-1 lg:mb-4">{infoType ? <h3 className="text-md lg:text-xl font-normal text-gray-400">{infoType}</h3> : <h3 className="text-sm invisible">place</h3>}</div>

					{/* Valor numérico */}
					<h3 className="text-3xl md:text-5xl font-bold text-blue-600">{cardData}</h3>
				</div>
			</div>
			<img src="" alt="" />
		</div>
	);
};

export default MyCard;
