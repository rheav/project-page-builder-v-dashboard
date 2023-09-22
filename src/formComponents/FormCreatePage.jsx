import BtnGradient from "../components/BtnGradient";

function FormCreatePage({
	handleCreatePage,
	pageTitle,
	setPageTitle,
	projectName,
	setProjectName,
	tag1,
	setTag1,
	tag2,
	setTag2,
	tag3,
	setTag3,
}) {
	return (
		<div>
			<form action="#">
				<h3 className="mb-4 text-2xl font-bold text-center text-transparent lg:text-4xl bg-clip-text bg-gradient-to-r from-startCold to-endCold">
					Info da Página
				</h3>
				<div className="grid my-10 gap-x-8 gap-y-5 sm:grid-cols-2">
					<div>
						<label
							htmlFor="page-title"
							className="block mb-2 font-bold text-blue-500 text-md dark:text-white"
						>
							Título da página*
						</label>
						<input
							type="text"
							name="pageTitle"
							id="page-title"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Página com Delay VSL#3"
							required=""
							value={pageTitle}
							onChange={(e) => setPageTitle(e.target.value)}
						/>
					</div>
					<div>
						<label
							htmlFor="project-name"
							className="block mb-2 font-bold text-blue-500 text-md dark:text-white"
						>
							Nome do Projeto*
						</label>
						<input
							type="text"
							name="projectName"
							id="project-name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Projeto Método 21 Dias"
							required=""
							value={projectName}
							onChange={(e) => setProjectName(e.target.value)}
						/>
					</div>
					<div>
						<label
							htmlFor="tag-1"
							className="block mb-2 font-bold text-blue-500 text-md dark:text-white"
						>
							Tag #1
						</label>
						<input
							type="text"
							name="tag1"
							id="tag-1"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="vendas"
							value={tag1}
							onChange={(e) => setTag1(e.target.value)}
						/>
					</div>
					<div>
						<label
							htmlFor="tag-2"
							className="block mb-2 font-bold text-blue-500 text-md dark:text-white"
						>
							Tag #2
						</label>
						<input
							type="text"
							name="tag2"
							id="tag-2"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="texto"
							value={tag2}
							onChange={(e) => setTag2(e.target.value)}
						/>
					</div>
					<div>
						<label
							htmlFor="tag-3"
							className="block mb-2 font-bold text-blue-500 text-md dark:text-white"
						>
							Tag #3
						</label>
						<input
							type="text"
							name="tag3"
							id="tag-3"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="lead #1"
							value={tag3}
							onChange={(e) => setTag3(e.target.value)}
						/>
					</div>
				</div>
				<div className="text-center">
					<BtnGradient clickEvent={handleCreatePage}>criar página</BtnGradient>
				</div>
			</form>
		</div>
	);
}

export default FormCreatePage;
