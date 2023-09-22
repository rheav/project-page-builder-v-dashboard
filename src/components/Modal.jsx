function Modal({ children, modalOpen }) {
	return (
		<div
			className={`${
				modalOpen ? "block" : "hidden"
			} absolute self-center p-4 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2`}
		>
			{children}
		</div>
	);
}

export default Modal;
