function BtnGradient({ children }) {
	return (
		<button className="relative w-52 lg:w-72 font-light text-xl text-white rounded-md py-4 px-10 shadow transition-all duration-300 group bg-black hover:shadow-xl hover:shadow-blue-300/75 hover:scale-110">
			<span className="relative z-10 text-base lg:text-2xl">{children}</span>
			<span className="absolute top-0 left-0 w-full h-full opacity-0  rounded-md py-2 px-3 z-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-startCold to-endCold"></span>
		</button>
	);
}

export default BtnGradient;
