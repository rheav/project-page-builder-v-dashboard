import { RxTrash } from "react-icons/rx";

function FolderCard({ children, niche, folderId, onDeleteFolder }) {
	function handleDeleteFolder() {
		onDeleteFolder(folderId);
	}

	return (
		<div className="w-full overflow-hidden transition-all duration-300 ease-linear border border-gray-300 hover:border-endCold rounded-md shadow-md max-w-[15rem] hover:shadow-lg hover:-translate-y-1">
			<div className="px-4 pt-3">
				<div className="mb-2 font-bold text-md">{children}</div>
			</div>
			<div className="flex px-4 pt-2 pb-1">
				<div className="flex-grow">
					<span className="inline-block px-2 py-1 mb-2 mr-2 text-[0.6rem] font-md text-black bg-orange-300 rounded-full">
						{niche}
					</span>
				</div>
				<div>
					<span
						onClick={handleDeleteFolder}
						className="flex flex-row p-1 text-sm transition-colors duration-300 ease-linear border border-gray-300 rounded-full cursor-pointer hover:bg-red-300"
					>
						<RxTrash />
					</span>
				</div>
			</div>
		</div>
	);
}

export default FolderCard;
