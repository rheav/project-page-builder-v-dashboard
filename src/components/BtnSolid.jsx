import { Link } from "react-router-dom";

function BtnSolid({ children, clickEvent, itemRoute }) {
	return (
		<Link to={itemRoute ? itemRoute : "#"}>
			<button
				onClick={clickEvent}
				className="px-8 py-[0.4rem] text-base font-light text-white transition-all duration-200 bg-black rounded-md shadow w-52 lg:w-62 group hover:shadow-xl lg:text-xl"
			>
				{children}
			</button>
		</Link>
	);
}

export default BtnSolid;
