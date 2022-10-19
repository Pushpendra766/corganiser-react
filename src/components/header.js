import React from "react";

export const Header = () => {
    const tabs = ["My Learning", "Notes", "About Us", "FAQs"];
    return (
        <div className="flex flex-row justify-between px-20 py-4 bg-gradient-to-r from-dark to-secondary via-primary">
            <h1 className="text-[#ffffff] text-left text-3xl font-bold ">
                <span className="text-[#91a380]">C</span>ORGANISER
            </h1>
            <div className="flex flex-row gap-12 text-light">
                {tabs.map(tab => {
                    return (
                        <button className="text-lg font-semibold">{tab}</button>
                    );
                })}
            </div>
        </div>
    );
};
