import React from "react";

export const Comments = ({ videoId }) => {
    return <div>{videoId}</div>;
};

export const Description = ({ description }) => {
    console.log(description);
    let desc = [];
    // for (let i = 0, j = 0; i < description.length; i + 120) {
    //     while (desc[i] !== " ") {
    //         i++;
    //     }
    //     desc.push(description.slice(j, i));
    //     j = i;
    // }
    console.log(desc);
    return (
        <div>
            {desc.map(line => {
                return line;
            })}
        </div>
    );
};

export const Notes = () => {
    return <div>This is Notes from the video</div>;
};
