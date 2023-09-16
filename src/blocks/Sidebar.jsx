import { useState, useEffect } from "react";
import Logo from "../components/Logo";
import SidebarItem from "../components/SidebarItem";
import { RxDesktop, RxGlobe, RxCode, RxCaretLeft, RxPerson, RxLayers, RxBarChart, RxMixerHorizontal, RxExit } from "react-icons/rx";
import UserAvatar from "../components/UserAvatar";
import Tooltip from "../components/Tooltip";

function Sidebar() {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [openState, setOpenState] = useState(true);

	function handleToggleSidebar() {
		const width = window.innerWidth;
		const breakpoint = 768;
		width < breakpoint ? setOpenState(false) : setOpenState(!openState);
	}

	useEffect(() => {
		const handleResize = () => {
			const newScreenWidth = window.innerWidth;
			setScreenWidth(newScreenWidth);

			if (newScreenWidth < 768) {
				setOpenState(false);
			} else {
				setOpenState(true);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<main className={` ${openState ? "w-48 lg:w-64" : "w-14 lg:w-20"} h-screen m-0 py-3 px-1 flex flex-col items-center border-r border-slate-300 bg-blue-500 relative duration-300 ease-linear `}>
			<button
				onClick={handleToggleSidebar}
				className={`w-7 h-7  absolute top-5 flex items-center justify-center rounded-full bg-white left-full -translate-x-1/2 border-2 border-blue-300 shadow-lg ${openState ? "" : "rotate-180"}`}
			>
				<RxCaretLeft className="w-4" />
			</button>
			<div className="mt-2 mb-8 mx-auto">
				<Logo isOpen={openState} />
			</div>
			<SidebarItem isOpen={openState} itemTitle={"Páginas"}>
				<RxDesktop />
				<Tooltip isOpen={openState} itemTitle={"Páginas"} />
			</SidebarItem>
			<SidebarItem isOpen={openState} itemTitle={"Domínios"}>
				<RxGlobe />
				<Tooltip isOpen={openState} itemTitle={"Domínios"} />
			</SidebarItem>
			<SidebarItem isOpen={openState} itemTitle={"Blocos Globais"}>
				<RxLayers />
				<Tooltip isOpen={openState} itemTitle={"Blocos Globais"} />
			</SidebarItem>
			<SidebarItem isOpen={openState} itemTitle={"Scripts Globais"}>
				<RxCode />
				<Tooltip isOpen={openState} itemTitle={"Scripts Globais"} />
			</SidebarItem>
			<SidebarItem isOpen={openState} itemTitle={"Analytics"}>
				<RxBarChart />
				<Tooltip isOpen={openState} itemTitle={"Analytics"} />
			</SidebarItem>
			<div className="absolute bottom-0 mb-4 px-1">
				<UserAvatar isOpen={openState} userName="Victor Rhea" />
				<SidebarItem isOpen={openState} itemTitle={"Minha Conta"}>
					<RxPerson />
					<Tooltip isOpen={openState} itemTitle={"Minha Conta"} />
				</SidebarItem>
				<SidebarItem isOpen={openState} itemTitle={"Configurações"}>
					<RxMixerHorizontal />
					<Tooltip isOpen={openState} itemTitle={"Configurações"} />
				</SidebarItem>
				<SidebarItem isOpen={openState} itemTitle={"Sair"}>
					<RxExit />
					<Tooltip isOpen={openState} itemTitle={"Sair"} />
				</SidebarItem>
			</div>
		</main>
	);
}

export default Sidebar;
