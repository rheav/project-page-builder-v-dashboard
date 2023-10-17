import React from "react";

const LiveDataDot = ({ bgPulse }) => {
	return (
		<div
			className={`${bgPulse} h-[6px] w-[6px] rounded-full whitespace-nowrap absolute top-0 left-full mx-1`}
		></div>
	);
};

export default LiveDataDot;
