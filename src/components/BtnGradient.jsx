function BtnGradient({ children, clickEvent }) {
	return (
		<button
			onClick={clickEvent}
			className="relative w-32 px-6 py-2 text-sm font-light text-white transition-all duration-200 rounded-md shadow bg-gradient-to-r from-startCold to-endCold group hover:shadow-xl hover:shadow-blue-300/75"
		>
			<span className="relative z-10 text-sm">{children}</span>
			<span className="absolute top-0 left-0 z-0 w-full h-full p-2 transition-all duration-200 bg-black rounded-md opacity-0 group-hover:opacity-100"></span>
		</button>
	);
}

export default BtnGradient;
