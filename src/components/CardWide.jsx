import LiveDataDot from "../assists/LiveDataDot";
import LineGraph from "../assists/LineGraph";
import Table from "./Table";

const CardWide = ({ children, infoType, cardData }) => {
	return (
		<div className="relative col-span-3 w-full border border-gray-300 rounded-lg shadow-md overflow-hidden transition">
			<div className="py-4 px-8">
				<h2 className="text-3xl font-md mb-4 relative inline-block text-transparent font-bold bg-clip-text bg-gradient-to-r from-startCold to-endCold lowercase">
					{children} <LiveDataDot />
					<p className="text-sm font-normal text-gray-400">{infoType}</p>
				</h2>
				<div className="grid grid-cols-2 gap-x-5">
					<Table cardData={cardData} />

					<LineGraph />
				</div>
			</div>
		</div>
	);
};

export default CardWide;
