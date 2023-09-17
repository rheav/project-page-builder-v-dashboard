function UserAvatar({ userName, isOpen }) {
	return (
		<div className="flex px-3 my-4 items-center gap-4">
			<img src="https://avatars.githubusercontent.com/u/42459335?v=4" alt="" className={`${isOpen ? "w-1/3" : "max-w-[45px] w-full"} rounded border border-slate-300 shadow-slate-100`} />
			{isOpen ? <h3 className="text-white text-xl font-bold justify-start">{userName}</h3> : ""}
		</div>
	);
}

export default UserAvatar;
