function UserAvatar({ userName, isOpen }) {
	return (
		<div
			className={`${isOpen ? "flex px-2 my-4 items-center gap-2" : "flex px-2 my-4 items-center"}`}
		>
			<img
				src="https://avatars.githubusercontent.com/u/42459335?v=4"
				alt=""
				className={`${
					isOpen ? "w-1/4" : "max-w-[50px] w-full"
				} rounded border border-slate-300 shadow-slate-100`}
			/>
			{isOpen ? (
				<h3 className="justify-start text-sm font-bold text-white transition-opacity ease-linear delay-300 opacity-100">
					{userName}
				</h3>
			) : (
				<h3 className="opacity-0"></h3>
			)}
		</div>
	);
}

export default UserAvatar;
