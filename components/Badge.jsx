"use client";
import CountUp from "react-countup";

const Badge = ({
    containerStyles,
    icon,
    startCountText,
    endCountNum,
    endCountText,
    badgeText,
}) => {
    return (
        <div className={`badge ${containerStyles}`}>
            <div className="text-3xl text-black">{icon}</div>
            <div className="flex items-center gap-x-2">
                <div className="text-4xl leading-none font-bold text-black">
                    {startCountText}
                    <CountUp end={endCountNum} delay={1} duration={4} />
                    {endCountText}
                </div>
                <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">
                    {badgeText}
                </div>
            </div>
        </div>
    );
};

export default Badge;
