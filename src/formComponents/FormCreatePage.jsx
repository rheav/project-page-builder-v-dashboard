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
	modalOpen,
	onModalOpen,
}) {
	const inputStyles =
		"bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full py-1.5 px-2 placeholder:text-xs dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

	const labelStyles = "block mb-2 font-bold text-blue-500 text-xs dark:text-white";

	return (
		<div>
			<form action="#">
				<h3 className="mb-2 text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-startCold to-endCold">
					Info da Página
				</h3>
				<div className="grid my-6 gap-x-6 gap-y-3 sm:grid-cols-2">
					<div>
						<label
							htmlFor="page-title"
							className={labelStyles}
						>
							Título da página*
						</label>
						<input
							type="text"
							name="pageTitle"
							id="page-title"
							className={inputStyles}
							placeholder="Página com Delay VSL#3"
							required=""
							value={pageTitle}
							onChange={(e) => setPageTitle(e.target.value)}
						/>
					</div>
					<div>
						<label
							htmlFor="project-name"
							className={labelStyles}
						>
							Nome do Projeto*
						</label>
						<input
							type="text"
							name="projectName"
							id="project-name"
							className={inputStyles}
							placeholder="Projeto Método 21 Dias"
							required=""
							value={projectName}
							onChange={(e) => setProjectName(e.target.value)}
						/>
					</div>
					<div>
						<label
							htmlFor="tag-1"
							className={labelStyles}
						>
							Tag #1
						</label>
						<input
							type="text"
							name="tag1"
							id="tag-1"
							className={inputStyles}
							placeholder="vendas"
							value={tag1}
							onChange={(e) => setTag1(e.target.value)}
						/>
					</div>
					<div>
						<label
							htmlFor="tag-2"
							className={labelStyles}
						>
							Tag #2
						</label>
						<input
							type="text"
							name="tag2"
							id="tag-2"
							className={inputStyles}
							placeholder="texto"
							value={tag2}
							onChange={(e) => setTag2(e.target.value)}
						/>
					</div>
					<div>
						<label
							htmlFor="tag-3"
							className={labelStyles}
						>
							Tag #3
						</label>
						<input
							type="text"
							name="tag3"
							id="tag-3"
							className={inputStyles}
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
