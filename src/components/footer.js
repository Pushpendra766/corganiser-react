import React from "react";

export const Footer = () => {
    return (
        <div className="flex flex-col gap-8 pb-20 justify-between px-20 py-4 bg-gradient-to-r from-dark to-secondary via-primary">
            <h1 className="text-[#ffffff] text-left text-3xl font-bold ">
                <span className="text-[#91a380]">C</span>ORGANISER
            </h1>
            <div className="flex flex-row gap-12 text-light w-4/12">
                The word 'Corganiser' comes from two words 'Course' and
                'Organiser'. Corganiser is a webapp that can organise your
                course playlist from youtube and make it an organised course.
                You can also take notes here and save them for use in future or
                just for revising.
            </div>
        </div>
    );
};
