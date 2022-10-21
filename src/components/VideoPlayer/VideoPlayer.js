import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import ReactPlayer from "react-player";
import { useState } from "react";
import { Comments, Description, Notes } from "./VideoElements";

export const VideoPlayer = () => {
    const videos = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    const options = ["Description", "Notes", "Comments"];
    const [currentOpt, setCurrentOpt] = useState("Description");

    return (
        <>
            <Header nav={false} courseTitle="THis is Course" />
            <div className="flex flex-row justify-between">
                <div className="">
                    <ReactPlayer
                        width={1050}
                        height={500}
                        url="https://youtu.be/PeVyHyupjCI"
                        controls
                        pip={true}
                    />
                    <div className="flex flex-row gap-8 pl-10 py-4 font-semibold text-xl text-secondary">
                        {options.map(option => {
                            return (
                                <button
                                    className={`${
                                        currentOpt === option &&
                                        "text-dark font-bold"
                                    }`}
                                    onClick={() => {
                                        setCurrentOpt(option);
                                    }}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>
                    <div>
                        {currentOpt === "Description" && <Description />}
                        {currentOpt === "Notes" && <Notes />}
                        {currentOpt === "Comments" && <Comments />}
                    </div>
                    <Footer />
                </div>
                <div className="w-8/12">
                    <h1 className="text-xl font-bold  pl-10 py-4 bg-dark text-[#ffffff]">
                        Course Content
                    </h1>
                    <hr />
                    <div className="overflow-scroll h-screen w-full">
                        {videos.map(video => {
                            return (
                                <div className="px-6 py-2 hover:bg-light cursor-pointer">
                                    <p className="text-lg font-semibold">
                                        {video}. Introduction to C++
                                    </p>
                                    <p className="pl-4 text-sm">5 min</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
