import React from "react";
import ProgressBar from "../elements/progressBar";

export const LearningSection = () => {
    const img =
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
    return (
        <div className="mx-20 border-2 border-dark bg-light rounded-xl p-10">
            <div className="bg-[#ffffff] w-60 border-2 border-secondary rounded-lg p-2">
                <img src={img} alt="course" className="border rounded-lg" />
                <div className="space-y-2 px-2 py-4 text-sm">
                    <p className="text-xl font-bold">Course Name</p>
                    <p>Raj Vikramaditya, Striver</p>
                    <ProgressBar completed="69" />
                    <p>10% complete</p>
                </div>
            </div>
        </div>
    );
};
