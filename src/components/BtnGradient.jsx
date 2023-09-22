function BtnGradient({ children, clickEvent }) {
	return (
		<button
			onClick={clickEvent}
			className="relative px-10 py-2 font-light text-white transition-all duration-200 rounded-md shadow bg-gradient-to-r from-startCold to-endCold w-52 lg:w-62 group hover:shadow-xl hover:shadow-blue-300/75"
		>
			<span className="relative z-10 text-base lg:text-xl">{children}</span>
			<span className="absolute top-0 left-0 z-0 w-full h-full px-3 py-2 transition-all duration-200 bg-black rounded-md opacity-0 group-hover:opacity-100"></span>
		</button>
	);
}

export default BtnGradient;
