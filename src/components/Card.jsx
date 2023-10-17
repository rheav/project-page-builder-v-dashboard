import LiveDataDot from "../assists/LiveDataDot";

const MyCard = ({ children, cardData, infoType, bgGradient }) => {
	return (
		<div
			className={`${
				bgGradient ? "bg-gradient-to-r from-startCold to-endCold" : "bg-white"
			} relative w-full overflow-hidden transition border border-gray-300 shadow-md rounded-xl`}
		>
			<div className="px-8 py-2 lg:py-4 lg:px-4">
				<div className="my-1">
					<div className="whitespace-nowrap">
						<h2
							className={`${
								bgGradient
									? "text-white"
									: "text-transparent bg-clip-text bg-gradient-to-r from-startCold to-endCold"
							} relative inline-block mb-0 text-2xl font-light text-transparent lowercase xl:text-lg font-md`}
						>
							{/* Título */}
							{children}{" "}
							<LiveDataDot
								bgPulse={
									bgGradient
										? "bg-yellow-300 animate-pulseLiveYLW"
										: "bg-green-500 animate-pulseLiveGRN"
								}
							/>
						</h2>
					</div>
					{/* subtítulo */}
					<div className="mb-1 lg:mb-2">
						{infoType ? (
							<h3 className={`${bgGradient ? "text-white" : "text-gray-400"} font-light text-xs`}>
								{infoType}
							</h3>
						) : (
							<h3 className="invisible text-sm">place</h3>
						)}
					</div>

					{/* Valor numérico */}
					<h3 className={`${bgGradient ? "text-white" : "text-startCold"} text-2xl font-bold`}>
						{cardData}
					</h3>
				</div>
			</div>
			<img
				src=""
				alt=""
			/>
		</div>
	);
};

export default MyCard;
