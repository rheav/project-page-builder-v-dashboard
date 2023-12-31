import LiveDataDot from "../assists/LiveDataDot";
import LineGraph from "../assists/LineGraph";
import Table from "./Table";

const CardWide = ({ children, infoType, cardData, bgGradient }) => {
	return (
		<div className="w-full h-full overflow-hidden transition bg-white border border-gray-300 shadow-md col-span-full rounded-xl">
			<div className="px-8 py-4">
				<div className="whitespace-nowrap">
					<h2 className="relative inline-block mb-0 text-2xl font-bold text-transparent lowercase xl:text-xl font-md bg-clip-text bg-gradient-to-r from-startCold to-endCold">
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
				<div className="mb-1 lg:mb-4">
					{infoType ? (
						<h3 className="text-sm font-light text-gray-400">{infoType}</h3>
					) : (
						<h3 className="invisible text-sm">place</h3>
					)}
				</div>
				<div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
					<Table cardData={cardData} />

					<LineGraph />
				</div>
			</div>
		</div>
	);
};

export default CardWide;
