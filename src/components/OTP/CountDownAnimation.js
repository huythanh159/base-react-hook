import { forwardRef, useEffect, useState, useImperativeHandle } from "react";
import "./CountDownAnimation.scss"
const CountDownAnimation = forwardRef((props, ref) => {


    const TIME_LIMIT = 60;
    const [timeLeft, settimeLeft] = useState(TIME_LIMIT);
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 30;
    const ALERT_THRESHOLD = 15;

    const COLOR_CODES = {
        info: {
            color: "green"
        },
        warning: {
            color: "orange",
            threshold: WARNING_THRESHOLD
        },
        alert: {
            color: "red",
            threshold: ALERT_THRESHOLD
        }
    };

    let timePassed = 0;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }

    const setRemainingPathColor = (timeLeft) => {
        const { alert, warning, info } = COLOR_CODES;
        if (timeLeft <= alert.threshold) {
            document
                .getElementById("base-timer-path-remaining")
                .classList.remove(warning.color);
            document
                .getElementById("base-timer-path-remaining")
                .classList.add(alert.color);
        } else if (timeLeft <= warning.threshold) {
            document
                .getElementById("base-timer-path-remaining")
                .classList.remove(info.color);
            document
                .getElementById("base-timer-path-remaining")
                .classList.add(warning.color);
        }
    }

    const calculateTimeFraction = () => {
        const rawTimeFraction = (timeLeft - 1) / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }

    const setCircleDasharray = () => {
        const circleDasharray = `${(
            calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        document
            .getElementById("base-timer-path-remaining")
            .setAttribute("stroke-dasharray", circleDasharray);
    }
    useEffect(() => {
        if (timeLeft === 0) {
            props.setIsDisableBtn(true);
            return;
        }
        const timer = setInterval(() => {
            let curentTime = timeLeft - 1
            settimeLeft(curentTime)
            setCircleDasharray();
            setRemainingPathColor(curentTime);
        }, 1000)
        return () => {
            clearInterval(timer);
        }
    }, [timeLeft])
    useImperativeHandle(ref, () => ({

        resetTimer() {
            const { alert, warning, info } = COLOR_CODES;
            document
                .getElementById("base-timer-path-remaining")
                .classList.remove(alert.color);
            document
                .getElementById("base-timer-path-remaining")
                .classList.remove(warning.color);
            document
                .getElementById("base-timer-path-remaining")
                .classList.add(info.color);

            settimeLeft(TIME_LIMIT);
            props.setIsDisableBtn(false)
        }

    }));

    return (
        <div className="C-D-A-Container">
            <div className="base-timer">
                <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g className="base-timer__circle">
                        <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                        <path
                            id="base-timer-path-remaining"
                            stroke-dasharray="283"
                            className={`base-timer__path-remaining ${remainingPathColor}`}
                            d=" M 50, 50
                                m -45, 0
                                a 45,45 0 1,0 90,0
                                a 45,45 0 1,0 -90,0"
                        ></path>
                    </g>
                </svg>
                <span id="base-timer-label" className="base-timer__label">
                    {formatTime(timeLeft)}
                </span>
            </div>
        </div>
    )
})
export default CountDownAnimation;