import LiveDataDot from "../assists/LiveDataDot";
import LineGraph from "../assists/LineGraph";
import Table from "./Table";

const CardWide = ({ children, infoType, cardData }) => {
	return (
		<div className=" w-full border border-gray-300 rounded-xl shadow-md overflow-hidden transition col-span-3 h-full">
			<div className="py-4 px-8">
				<div className="whitespace-nowrap">
					<h2 className="text-2xl xl:text-2xl 2xl:text-3xl font-md mb-0 relative inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-startCold to-endCold lowercase">
						{/* Título */}
						{children} <LiveDataDot />
					</h2>
				</div>
				{/* subtítulo */}
				<div className="mb-1 lg:mb-4">{infoType ? <h3 className="text-md lg:text-xl font-light text-gray-400">{infoType}</h3> : <h3 className="text-sm invisible">place</h3>}</div>
				<div className="grid grid-cols-1 2xl:grid-cols-2 gap-5">
					<Table cardData={cardData} />

					<LineGraph />
				</div>
			</div>
		</div>
	);
};

export default CardWide;
