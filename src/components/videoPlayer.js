import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const VideoPlayer = () => {
    const videos = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    return (
        <>
            <Header nav={false} courseTitle="THis is Course" />
            <div className="flex flex-row justify-between">
                <div className="">
                    <iframe
                        width="1050"
                        height="500"
                        src="https://www.youtube.com/embed/RepLtLlTOmM"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
                <div className="w-4/12">
                    <h1 className="text-xl font-bold  pl-10 py-4 bg-dark text-[#ffffff]">
                        Course Content
                    </h1>
                    <hr />
                    <div className="overflow-scroll h-screen w-full">
                        {videos.map(video => {
                            return (
                                <div className="px-8 py-2 hover:bg-light">
                                    <button className="text-lg font-semibold">
                                        {video}. Introduction to C++
                                    </button>
                                    <p className="pl-4 text-sm">5 min</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
