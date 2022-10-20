import React from "react";
import { Link } from "react-router-dom";

export const Header = props => {
    const nav = props.nav && true;
    const courseTitle = props.courseTitle;
    const tabs = ["My Learning", "Notes", "About Us", "FAQs"];
    return (
        <div className="flex flex-row justify-between px-4 lg:px-20 py-4 bg-gradient-to-r from-dark to-secondary via-primary">
            <Link to="/">
                <h1 className="text-[#ffffff] text-left text-3xl font-bold ">
                    <span className="text-[#91a380]">C</span>ORGANISER
                </h1>
            </Link>

            <div
                className={`text-[#ffffff] ${
                    courseTitle || "hidden"
                } text-xl font-semibold`}
            >
                <p>{courseTitle}</p>
            </div>
            <div
                className={`flex flex-row gap-6 lg:gap-12 text-light ${
                    nav === false && "hidden"
                }`}
            >
                {tabs.map(tab => {
                    return (
                        <button className="text-lg font-semibold" key={tab}>
                            {tab}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
