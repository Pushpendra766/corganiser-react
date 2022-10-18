import React from "react";
import { useState } from "react";

const ProgressBar = props => {
    const barWidth = useState(
        Math.round(parseInt((props.completed / 100) * 12))
    );
    console.log(barWidth[0]);
    return (
        <div className={`bg-light rounded-full h-2 w-12/12`}>
            <div className={`bg-secondary rounded-full h-2 w-7/12`}></div>
        </div>
    );
};

export default ProgressBar;
