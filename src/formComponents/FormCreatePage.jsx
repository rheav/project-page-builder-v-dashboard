import BtnGradient from "../components/BtnGradient";

function FormCreatePage() {
	return (
		<div>
			<form action="#">
				<h3 className="mb-4 text-2xl font-bold text-center text-transparent lg:text-4xl bg-clip-text bg-gradient-to-r from-startCold to-endCold">
					Info da Página
				</h3>
				<div className="grid gap-4 mb-4 sm:grid-cols-2">
					<div>
						<label
							htmlFor="username"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Título da página
						</label>
						<input
							type="text"
							name="pageTitle"
							id="username"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="username.example"
							required=""
						/>
					</div>
					<div>
						<label
							htmlFor="username"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Nome do Projeto
						</label>
						<input
							type="text"
							name="pageTitle"
							id="username"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="username.example"
							required=""
						/>
					</div>
					<div>
						<label
							htmlFor="username"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Tag #1
						</label>
						<input
							type="text"
							name="pageTitle"
							id="username"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="username.example"
						/>
					</div>
					<div>
						<label
							htmlFor="username"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Tag #2
						</label>
						<input
							type="text"
							name="pageTitle"
							id="username"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="username.example"
						/>
					</div>
					<div>
						<label
							htmlFor="username"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Tag #3
						</label>
						<input
							type="text"
							name="pageTitle"
							id="username"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="username.example"
						/>
					</div>
				</div>
				<div className="text-center">
					<BtnGradient>criar página</BtnGradient>
				</div>
			</form>
		</div>
	);
}

export default FormCreatePage;
