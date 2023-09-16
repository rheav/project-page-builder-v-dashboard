function Tooltip({ itemTitle, isOpen }) {
	return (
		<div
			className={`absolute -top-4 left-12 px-1 justify-center bg-slate-100 text-blue-500 rounded border border-gray-300 shadow font-light text-md opacity-0 ${
				!isOpen ? "group-hover:opacity-100" : ""
			} transition-opacity delay-300`}
		>
			{itemTitle}
		</div>
	);
}

export default Tooltip;
