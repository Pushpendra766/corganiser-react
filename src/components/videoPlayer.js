import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const VideoPlayer = () => {
    return (
        <>
            <Header nav={false} courseTitle="THis is Course" />
            <div className="flex flex-row mx-20 my-4">
                <div className="w-8/12">video player</div>
                <div>
                    <h1 className="text-xl font-bold pb-2">Course Content</h1>
                    <hr />
                    <div className="px-2 py-2 hover:bg-light">
                        <button className="text-lg font-semibold">
                            1. Introduction to C++
                        </button>
                        <p className="pl-4 text-sm">5 min</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
