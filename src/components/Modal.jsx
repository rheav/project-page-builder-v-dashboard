import { RxCross2 } from "react-icons/rx";

function Modal({ children, modalOpen, onModalOpen }) {
	return (
		<div
			className={`${
				modalOpen ? "block" : "hidden"
			} absolute self-center px-6 py-5 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 z-10 border border-gray-300`}
		>
			<div className="flex flex-row justify-end ">
				<span
					onClick={onModalOpen}
					className="flex px-3 py-1 mb-1 text-xs font-normal text-black transition-colors duration-200 bg-red-300 rounded-full cursor-pointer hover:bg-red-600 hover:text-white"
				>
					<RxCross2 className="self-center text-xs" />
				</span>
			</div>
			{children}
		</div>
	);
}

export default Modal;
