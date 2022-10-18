import React from "react";

const ProgressBar = props => {
    const barWidth = Math.round((props.completed / 100) * 12);
    return (
        <div className={`bg-light rounded-full h-2`}>
            <div
                className={`bg-secondary rounded-full h-2 w-${barWidth}/12`}
            ></div>
        </div>
    );
};

export default ProgressBar;
