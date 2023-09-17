import LiveDataDot from "../assists/LiveDataDot";

const Card = ({ children, cardData, infoType }) => {
	return (
		<div className="relative border border-gray-300 rounded-lg shadow-md overflow-hidden transition">
			<img
				src="https://v1.tailwindcss.com/img/card-top.jpg"
				alt=""
			/>
			<div className="py-4 px-8">
				<div className="my-4 ">
					<h2 className="text-3xl font-md mb-4 relative inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-startCold to-endCold lowercase">
						{children} <LiveDataDot />
						{infoType ? <p className="text-sm font-normal text-gray-400">{infoType}</p> : <p className="text-sm invisible">place</p>}
					</h2>
					<h3 className="text-4xl font-bold text-blue-600">{cardData}</h3>
				</div>
			</div>
			<img
				src=""
				alt=""
			/>
		</div>
	);
};

export default Card;
