import { Link } from "react-router-dom";

function SidebarItem({ children, itemTitle, isOpen, itemRoute }) {
	return (
		<div className="group w-full">
			<Link to={itemRoute}>
				<div
					className={` ${
						isOpen ? "text-xl group-hover:text-2xl" : "justify-center text-2xl group-hover:text-3xl"
					} relative w-full h-15 rounded flex gap-5 px-3 py-[0.5rem]  border border-transparent items-center text-white font-light lowercase  duration-150 ease-linear cursor-pointer whitespace-nowrap group-hover:bg-purple-50 group-hover:border-gray-300 group-hover:text-blue-900 group-hover:shadow-md group-hover:font-normal group-focus:bg-white group`}
				>
					{children}
					{isOpen ? <p>{itemTitle}</p> : ""}
				</div>
			</Link>
		</div>
	);
}

export default SidebarItem;
