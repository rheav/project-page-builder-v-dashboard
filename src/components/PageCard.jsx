import { RxTrash } from "react-icons/rx";

function PageCard({ children, projectName, tag1, tag2, tag3, pageId, onDeletePage }) {
	function handleDeletePage() {
		onDeletePage(pageId);
	}

	return (
		<div className="w-full overflow-hidden rounded shadow-lg">
			<img
				className="w-full"
				src="https://v1.tailwindcss.com/img/card-top.jpg"
				alt="Sunset in the mountains"
			/>
			<div className="px-4 py-4">
				<div className="mb-2 text-xl font-bold">{children}</div>
				<p className="text-base text-gray-700">{projectName}</p>
			</div>
			<div className="flex px-4 pt-4 pb-2">
				<div className="flex-grow">
					<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-normal text-white bg-blue-500 rounded-full">
						{tag1}
					</span>
					<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-normal text-white bg-blue-500 rounded-full">
						{tag2}
					</span>
					<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-normal text-white bg-blue-500 rounded-full">
						{tag3}
					</span>
				</div>
				<div>
					<span
						onClick={handleDeletePage}
						className="flex flex-row p-1 text-xl transition-colors duration-300 ease-linear border border-gray-300 rounded-full cursor-pointer hover:bg-startCold/30"
					>
						<RxTrash />
					</span>
				</div>
			</div>
		</div>
	);
}

export default PageCard;
