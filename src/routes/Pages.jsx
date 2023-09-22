import { useState } from "react";
import BtnGradient from "../components/BtnGradient";
import BtnOutline from "../components/BtnOutline";
import PageCard from "../components/PageCard";
import FolderCard from "../components/FolderCard";

const foldersTest = [
	{
		id: 1,
		title: "Emagreça 21 dias",
		niche: "saúde",
	},
	{
		id: 2,
		title: "Programa Ele de Volta",
		niche: "relacionamento",
	},
	{
		id: 3,
		title: "Método Cash In",
		niche: "renda-extra",
	},
];

const pagesTest = [
	{
		id: 1,
		title: "Main VSL Delay",
		project: "Projeto A",
		tag1: "VSL",
		tag2: "página principal",
		tag3: "abcdef",
	},
	{
		id: 2,
		title: "Upsell 3",
		project: "Projeto B",
		tag1: "VSL",
		tag2: "página principal",
		tag3: "teste",
	},
	{
		id: 3,
		title: "Página Captura 2",
		project: "Projeto C",
		tag1: "TSL",
		tag2: "página 2",
		tag3: "xyz",
	},
];

const Pages = () => {
	const [pages, setPages] = useState(pagesTest);
	const [folders, setfolders] = useState(foldersTest);

	function handleCreatePage() {
		console.log("criei página");
	}

	function deletePage(pageToDelete) {
		//imutabilidade -> as variáveis não sofrem mutação -> nao alterar valor de var na memoria -> criamos um novo valor (novo espaço na memoria)

		const pagesWithoutDeletedOne = pages.filter((page) => {
			return page.id !== pageToDelete;
		});

		setPages(pagesWithoutDeletedOne);
	}

	function deleteFolder(foldersToDelete) {
		//imutabilidade -> as variáveis não sofrem mutação -> nao alterar valor de var na memoria -> criamos um novo valor (novo espaço na memoria)

		const foldersWithoutDeletedOne = folders.filter((folders) => {
			return folders.id !== foldersToDelete;
		});

		setfolders(foldersWithoutDeletedOne);
	}

	return (
		<section className="flex flex-col flex-1 h-screen">
			<div className="flex justify-between h-40 px-10 border-b-2 border-gray-300 shadow-md">
				<div>
					<h2 className="py-5 font-bold text-transparent lg:text-4xl bg-clip-text bg-gradient-to-r from-startCold to-endCold">
						Páginas & Pastas
					</h2>
					<input
						type="text"
						name="name"
						placeholder="busque sua página"
						className="p-2 border border-gray-300 rounded-md"
					/>
				</div>

				<div className="flex flex-col justify-center gap-5 p-2">
					<BtnGradient
						itemRoute="/paginas/nova-pagina"
						clickEvent={handleCreatePage}
					>
						Criar página
					</BtnGradient>

					<BtnOutline itemRoute="/paginas/nova-pasta">Criar pasta</BtnOutline>
				</div>
			</div>
			<h2 className="px-10 my-4 font-bold text-transparent lg:text-2xl bg-clip-text bg-gradient-to-r from-startCold ">
				Pastas
			</h2>
			<div className="flex w-full max-w-6xl gap-5 px-10 py-5">
				{folders.length > 0 ? (
					<>
						{folders.map((folder) => {
							return (
								<FolderCard
									key={folder.id}
									folderId={folder.id}
									niche={folder.niche}
									onDeleteFolder={deleteFolder}
								>
									{folder.title}
								</FolderCard>
							);
						})}
					</>
				) : (
					<>
						<h2 className="text-xl font-bold">Criar nova pasta</h2>
					</>
				)}
			</div>
			<h2 className="px-10 my-4 font-bold text-transparent lg:text-2xl bg-clip-text bg-gradient-to-r from-startCold">
				Páginas
			</h2>
			<div className="flex w-full max-w-6xl gap-5 px-10 py-5">
				{pages.length > 0 ? (
					<>
						{pages.map((page) => {
							return (
								<PageCard
									key={page.id}
									pageId={page.id}
									projectName={page.project}
									tag1={page.tag1}
									tag2={page.tag2}
									tag3={page.tag3}
									onDeletePage={deletePage}
								>
									{page.title}
								</PageCard>
							);
						})}
					</>
				) : (
					<>
						<h2 className="text-xl font-bold">Criar nova página</h2>
					</>
				)}
			</div>
		</section>
	);
};

export default Pages;
