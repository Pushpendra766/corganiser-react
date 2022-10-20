import React from "react";
import { CourseCard } from "./courseCard";
import { useState, useRef } from "react";
import axios from "axios";
import env from "react-dotenv";

export const LearningSection = () => {
    const [courses, setCourses] = useState([]);
    const inputRef = useRef(null);
    const [addCourse, setAddCourse] = useState(false);

    const handleClick = () => {
        const link = inputRef.current.value;
        inputRef.current.value = null;
        const playlistID = link.split("list=")[1].split("&")[0];

        const options = {
            method: "GET",
            url: "https://youtube-v31.p.rapidapi.com/playlists",
            params: { id: playlistID, part: "snippet" },
            headers: {
                "X-RapidAPI-Key": env.PLAYLIST_API_KEY,
                "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
            },
        };

        axios
            .request(options)
            .then(function (response) {
                const newCourse = {
                    id: playlistID,
                    name: response.data.items[0].snippet.title,
                    channel: response.data.items[0].snippet.channelTitle,
                    thumbnail:
                        response.data.items[0].snippet.thumbnails.medium.url,
                    progress: 0,
                };
                setCourses(courses => [...courses, newCourse]);
                console.log(courses);
                console.log(courses.length);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    return (
        <>
            <h2 className="text-primary text-center text-2xl font-bold">
                My Learnings
            </h2>
            <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 content-center grid-flow-row flex-row gap-6 mx-20 border-2 border-dark bg-light rounded-xl p-8">
                {courses.map(course => {
                    return <CourseCard course={course} key={course.name} />;
                })}
                <div className="bg-[#ffffff] w-60 border-2 border-secondary rounded-lg p-2">
                    <div className="m-16">
                        <img src="/svg/add.svg" alt="add" width={100} />
                    </div>
                    <button
                        className="border rounded-full px-10 py-2 font-semibold w-full text-[#ffffff] bg-primary hover:bg-dark text-base mt-6"
                        onClick={() => {
                            setAddCourse(true);
                        }}
                    >
                        Add New Course
                    </button>
                </div>
            </div>

            {/* For making the background black while popup */}
            <div
                className={`absolute w-full h-full bg-[#000000b5] z-10 ${
                    addCourse !== true && "hidden"
                }`}
            ></div>

            {/* Pop up */}
            <div
                className={`border-2  w-4/12 absolute z-20 px-6 pt-4 ${
                    addCourse !== true && "hidden"
                } inset-1/3 rounded-lg bg-[#ffffff] border-[#ffffff]`}
            >
                <div className="flex flex-row justify-between mx-4 pb-4">
                    <h1 className="text-2xl font-bold text-primary">
                        Add New Course
                    </h1>
                    <button
                        className="text-2xl font-bold"
                        onClick={() => {
                            setAddCourse(false);
                        }}
                    >
                        <img src="/svg/close.svg" alt="close" width={25} />
                    </button>
                </div>
                <hr className="pb-8" />
                <input
                    ref={inputRef}
                    className="border-2 border-primary bg-light rounded-sm w-full"
                    type="text"
                    name="course-name"
                    placeholder="Paste playlist link here..."
                />
                <button
                    className="border rounded-full px-10 py-2 font-semibold w-6/12 text-[#ffffff] bg-primary hover:bg-dark text-base mt-6 ml-28"
                    onClick={() => {
                        setAddCourse(false);
                        handleClick();
                    }}
                >
                    Add New Course
                </button>
            </div>
        </>
    );
};
