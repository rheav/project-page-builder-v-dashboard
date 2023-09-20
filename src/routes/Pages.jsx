import BtnGradient from "../components/BtnGradient";

import { RxFileText } from "react-icons/rx";

const Pages = () => {
	return (
		<section className="h-screen flex flex-row justify-center items-center">
			<main className=" lg:py-16 border rounded-xl  h-1/3 lg:h-2/3 w-10/12 lg:w-80 xl:w-1/3 flex flex-col justify-center items-center shadow-lg hover:shadow-2xl hover:shadow-blue-300/75 transition-all duration-500">
				<h1 className="leading-normal text-center text-3xl lg:text-5xl lg:leading-normal text-transparent font-light bg-clip-text bg-gradient-to-r from-startCold to-endCold lowercase mb-12">
					Crie sua primeira página!
				</h1>

				<BtnGradient>criar nova página</BtnGradient>
			</main>
		</section>
	);
};

export default Pages;
