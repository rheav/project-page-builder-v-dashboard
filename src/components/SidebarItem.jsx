import { Link } from "react-router-dom";

function SidebarItem({ children, itemTitle, isOpen, itemRoute }) {
	return (
		<div className="w-full group">
			<Link to={itemRoute}>
				<div
					className={` ${
						isOpen ? "text-xs gap-5 group-hover:text-blue-400" : "justify-center"
					} relative w-full h-15 rounded flex px-3 py-[0.5rem] border border-transparent items-center text-white font-light lowercase  duration-150 ease-linear cursor-pointer whitespace-nowrap group-hover:bg-purple-50 group-hover:border-gray-300 group-hover:text-blue-900 group-hover:shadow-md group-hover:font-normal group-focus:bg-white group`}
				>
					{children}
					{isOpen ? (
						<p className="transition-opacity ease-linear delay-300 opacity-100">{itemTitle}</p>
					) : (
						<p className="opacity-0"></p>
					)}
				</div>
			</Link>
		</div>
	);
}

export default SidebarItem;
