import React, { useState, useEffect } from "react";
import { PauseOutlined, CaretRightOutlined } from "@ant-design/icons";
import "./style.scss";

interface BaseCountdownTimerProps {
	initialMinutes: number;
}

const BaseCountdownTimer: React.FC<BaseCountdownTimerProps> = ({
	initialMinutes,
}) => {
	const [secondsRemaining, setSecondsRemaining] = useState(initialMinutes * 60);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (!isPaused && secondsRemaining > 0) {
			timer = setInterval(() => {
				setSecondsRemaining((prevSeconds) => prevSeconds - 1);
			}, 1000);
		}
		return () => clearInterval(timer);
	}, [isPaused, secondsRemaining]);

	const formatTime = (totalSeconds: number) => {
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;
		return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
	};

	return (
		<div className="countdown-timer">
			<div className="time-display">
				<span>{formatTime(secondsRemaining)}</span>
			</div>
			<div className="pause-button" onClick={() => setIsPaused(!isPaused)}>
				{isPaused ? (
					<CaretRightOutlined style={{ fontSize: "24px" }} />
				) : (
					<PauseOutlined style={{ fontSize: "24px" }} />
				)}
			</div>
		</div>
	);
};

export default BaseCountdownTimer;
