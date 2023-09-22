import { RxTrash } from "react-icons/rx";

function FolderCard({ children, niche, folderId, onDeleteFolder }) {
	function handleDeleteFolder() {
		onDeleteFolder(folderId);
	}

	return (
		<div className="w-full max-w-xs overflow-hidden transition-all duration-300 ease-linear border border-gray-300 rounded-md shadow-md hover:shadow-lg hover:-translate-y-2">
			<div className="px-6 pt-4">
				<div className="mb-4 text-xl font-bold">{children}</div>
			</div>
			<div className="flex px-6 pt-3 pb-2">
				<div className="flex-grow">
					<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-normal text-black bg-orange-300 rounded-full">
						{niche}
					</span>
				</div>
				<div>
					<span
						onClick={handleDeleteFolder}
						className="flex flex-row p-1 text-xl transition-colors duration-300 ease-linear border border-gray-300 rounded-full cursor-pointer hover:bg-red-300"
					>
						<RxTrash />
					</span>
				</div>
			</div>
		</div>
	);
}

export default FolderCard;
