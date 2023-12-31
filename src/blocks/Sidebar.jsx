/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Logo from "../components/Logo";
import SidebarItem from "../components/SidebarItem";
import {
	RxDesktop,
	RxGlobe,
	RxCode,
	RxCaretLeft,
	RxPerson,
	RxLayers,
	RxBarChart,
	RxMixerHorizontal,
	RxExit,
	RxDashboard,
} from "react-icons/rx";
import UserAvatar from "../components/UserAvatar";
import Tooltip from "../components/Tooltip";

function Sidebar() {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [openState, setOpenState] = useState(true);
	const [page, setPage] = useState("Visão Geral");
	const breakpoint = 900;

	function handleSetPage() {
		setPage();
	}

	function handleToggleSidebar() {
		const width = window.innerWidth;
		width < breakpoint ? setOpenState(false) : setOpenState(!openState);
	}

	useEffect(() => {
		const handleResize = () => {
			const newScreenWidth = window.innerWidth;
			setScreenWidth(newScreenWidth);

			if (newScreenWidth < breakpoint) {
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
		<div
			className={` ${
				openState ? "w-44" : "w-16"
			} h-full m-0 py-3 px-1 flex flex-col grow border-r border-slate-300 bg-gradient-to-b from-startCold to-endCold relative duration-200 ease-linear z-10`}
		>
			<button
				onClick={handleToggleSidebar}
				className={`w-7 h-7  absolute top-5 flex items-center justify-center rounded-full bg-white left-full -translate-x-1/2 border-2 border-blue-300 shadow-lg ${
					openState ? "" : "rotate-180"
				}`}
			>
				<RxCaretLeft className="w-4" />
			</button>
			<div className="mx-auto mt-2 mb-8">
				<Logo isOpen={openState} />
			</div>
			<SidebarItem
				isOpen={openState}
				itemTitle={"Visão Geral"}
				itemRoute="/"
			>
				<RxDashboard />
				<Tooltip
					isOpen={openState}
					itemTitle={"Visão Geral"}
				/>
			</SidebarItem>
			<SidebarItem
				isOpen={openState}
				itemTitle={"Páginas"}
				itemRoute="/paginas"
			>
				<RxDesktop />
				<Tooltip
					isOpen={openState}
					itemTitle={"Páginas"}
				/>
			</SidebarItem>
			<SidebarItem
				isOpen={openState}
				itemTitle={"Domínios"}
			>
				<RxGlobe />
				<Tooltip
					isOpen={openState}
					itemTitle={"Domínios"}
				/>
			</SidebarItem>
			<SidebarItem
				isOpen={openState}
				itemTitle={"Blocos Globais"}
			>
				<RxLayers />
				<Tooltip
					isOpen={openState}
					itemTitle={"Blocos Globais"}
				/>
			</SidebarItem>
			<SidebarItem
				isOpen={openState}
				itemTitle={"Scripts Globais"}
			>
				<RxCode />
				<Tooltip
					isOpen={openState}
					itemTitle={"Scripts Globais"}
				/>
			</SidebarItem>
			<SidebarItem
				isOpen={openState}
				itemTitle={"Analytics"}
			>
				<RxBarChart />
				<Tooltip
					isOpen={openState}
					itemTitle={"Analytics"}
				/>
			</SidebarItem>
			<div className="absolute bottom-0 px-1 mb-4">
				<UserAvatar
					isOpen={openState}
					userName="Victor Rhea"
				/>
				<SidebarItem
					isOpen={openState}
					itemTitle={"Minha Conta"}
				>
					<RxPerson />
					<Tooltip
						isOpen={openState}
						itemTitle={"Minha Conta"}
					/>
				</SidebarItem>
				<SidebarItem
					isOpen={openState}
					itemTitle={"Configurações"}
				>
					<RxMixerHorizontal />
					<Tooltip
						isOpen={openState}
						itemTitle={"Configurações"}
					/>
				</SidebarItem>
				<SidebarItem
					isOpen={openState}
					itemTitle={"Sair"}
				>
					<RxExit />
					<Tooltip
						isOpen={openState}
						itemTitle={"Sair"}
					/>
				</SidebarItem>
			</div>
		</div>
	);
}

export default Sidebar;
