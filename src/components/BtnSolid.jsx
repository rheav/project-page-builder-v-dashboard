import { Link } from "react-router-dom";

function BtnSolid({ children, clickEvent, itemRoute }) {
	return (
		<Link to={itemRoute ? itemRoute : "#"}>
			<button
				onClick={clickEvent}
				className="px-10 py-[0.45rem] w-32 text-sm font-light text-white transition-all duration-200 bg-black rounded-md shadow-40 group hover:shadow-xl"
			>
				{children}
			</button>
		</Link>
	);
}

export default BtnSolid;
