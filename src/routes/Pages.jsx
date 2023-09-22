import { useState } from "react";
import BtnGradient from "../components/BtnGradient";
import BtnOutline from "../components/BtnOutline";
import PageCard from "../components/PageCard";
import FolderCard from "../components/FolderCard";
import Modal from "../components/Modal";
import FormCreatePage from "../formComponents/FormCreatePage";

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

/* const pagesTest = [
	{
		id: 1,
		title: "Main VSL Delay",
		project: "Projeto A",
		tag1: "VSL",
		tag2: "página 1",
		tag3: "abcdef",
	},
	{
		id: 2,
		title: "Upsell 3",
		project: "Projeto B",
		tag1: "VSL",
		tag2: "página 3",
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
]; */

const currentPages = [];

const Pages = () => {
	const [pages, setPages] = useState(currentPages);
	const [folders, setfolders] = useState(foldersTest);
	const [modalOpen, setModalOpen] = useState(false);

	// Criação de Novas Páginas
	const [pageTitle, setPageTitle] = useState("");
	const [projectName, setProjectName] = useState("");
	const [tag1, setTag1] = useState("");
	const [tag2, setTag2] = useState("");
	const [tag3, setTag3] = useState("");
	const [createdPage, setCreatedPage] = useState({
		id: null,
		title: "",
		project: "",
		tag1: "",
		tag2: "",
		tag3: "",
	});

	const handleCreatePage = (e) => {
		e.preventDefault();

		const newPage = {
			id: Date.now(),
			title: pageTitle,
			project: projectName,
			tag1,
			tag2,
			tag3,
		};

		setCreatedPage(newPage);
		currentPages.push(newPage);
	};

	/* Apagar Páginas] */
	function deletePage(pageToDelete) {
		const pagesWithoutDeletedOne = pages.filter((page) => {
			return page.id !== pageToDelete;
		});

		setPages(pagesWithoutDeletedOne);
	}

	/* Apagar Pastas */
	function deleteFolder(foldersToDelete) {
		const foldersWithoutDeletedOne = folders.filter((folders) => {
			return folders.id !== foldersToDelete;
		});

		setfolders(foldersWithoutDeletedOne);
	}

	/* Controlar estado do Modal */
	function handleModalOpen() {
		setModalOpen(!modalOpen);
		console.log(modalOpen);
	}

	return (
		<section className="flex flex-col flex-1 h-screen">
			<Modal
				modalOpen={modalOpen}
				onModalOpen={handleModalOpen}
			>
				<FormCreatePage
					handleCreatePage={handleCreatePage}
					pageTitle={pageTitle}
					setPageTitle={setPageTitle}
					projectName={projectName}
					setProjectName={setProjectName}
					tag1={tag1}
					setTag1={setTag1}
					tag2={tag2}
					setTag2={setTag2}
					tag3={tag3}
					setTag3={setTag3}
				/>
			</Modal>
			<div className="flex justify-between h-40 px-10 py-4 mb-4 border-b-2 border-gray-300 shadow-md ">
				<div>
					<h2 className="mb-4 text-2xl font-bold text-transparent lg:text-4xl bg-clip-text bg-gradient-to-r from-startCold to-endCold">
						Páginas & Pastas
					</h2>
					<input
						type="text"
						name="name"
						placeholder="busque sua página"
						className="p-2 placeholder-blue-300 border border-gray-300 rounded-md focus:border-blue-500"
					/>
				</div>

				<div className="flex flex-col justify-center gap-5 p-1">
					<BtnGradient clickEvent={handleModalOpen}>Criar página</BtnGradient>

					<BtnOutline>Criar pasta</BtnOutline>
				</div>
			</div>
			<h2 className="px-10 my-2 font-bold text-transparent lg:text-2xl bg-clip-text bg-gradient-to-r from-startCold ">
				Pastas
			</h2>
			<div className="flex flex-wrap w-1/2 gap-5 px-10 py-5 lg:w-full ">
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
			<h2 className="px-10 my-2 font-bold text-transparent lg:text-2xl bg-clip-text bg-gradient-to-r from-startCold">
				Páginas
			</h2>
			<div className="flex flex-wrap w-1/2 gap-5 px-10 py-5 lg:w-full ">
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
