import { Link } from "react-router-dom";

function BtnOutline({ children, clickEvent, itemRoute }) {
	return (
		<Link to={itemRoute ? itemRoute : "#"}>
			<button
				onClick={clickEvent}
				className="px-10 py-[0.4rem] font-light text-black transition-all duration-200 bg-transparent border border-black rounded-md shadow w-52 lg:w-62 hover:shadow-blue-300/75 hover:text-startCold hover:border-startCold"
			>
				<span className="text-base lg:text-xl">{children}</span>
			</button>
		</Link>
	);
}

export default BtnOutline;
