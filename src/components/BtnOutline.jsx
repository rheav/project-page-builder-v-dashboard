import { Link } from "react-router-dom";

function BtnOutline({ children, clickEvent, itemRoute }) {
	return (
		<Link to={itemRoute ? itemRoute : "#"}>
			<button
				onClick={clickEvent}
				className="px-6  text-sm py-[0.45rem] font-light text-black transition-all duration-200 bg-transparent border border-black rounded-md shadow w-32 hover:bg-black hover:shadow-blue-300/75 hover:text-white"
			>
				<span className="text-sm">{children}</span>
			</button>
		</Link>
	);
}

export default BtnOutline;
