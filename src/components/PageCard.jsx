import { RxTrash } from "react-icons/rx";

function PageCard({ children, projectName, tag1, tag2, tag3, pageId, onDeletePage }) {
	function handleDeletePage() {
		onDeletePage(pageId);
	}

	return (
		<div className="max-w-[15rem] overflow-hidden transition-all duration-200 border border-gray-200 rounded-md shadow-md hover:shadow-lg hover:-translate-y-1">
			<img
				className="w-full [0.6rem]"
				src="https://v1.tailwindcss.com/img/card-top.jpg"
				alt="Sunset in the mountains"
			/>
			<div className="px-3 py-3">
				<div className="mb-1 text-base font-bold">{children}</div>
				<p className="text-sm text-gray-600">{projectName}</p>
			</div>
			<div className="flex px-3 pt-1 pb-2">
				<div className="flex-grow">
					<span className="inline-block px-2 py-1 mb-2 mr-2 text-[0.6rem] font-normal text-white bg-blue-500 rounded-full">
						{tag1}
					</span>
					<span className="inline-block px-2 py-1 mb-2 mr-2 text-[0.6rem] font-normal text-white bg-blue-500 rounded-full">
						{tag2}
					</span>
					<span className="inline-block px-2 py-1 mb-2 mr-2 text-[0.6rem] font-normal text-white bg-blue-500 rounded-full">
						{tag3}
					</span>
				</div>
				<div>
					<span
						onClick={handleDeletePage}
						className="flex flex-row p-1 text-sm transition-colors duration-200 ease-linear border border-gray-300 rounded-full cursor-pointer hover:bg-red-300"
					>
						<RxTrash />
					</span>
				</div>
			</div>
		</div>
	);
}

export default PageCard;
