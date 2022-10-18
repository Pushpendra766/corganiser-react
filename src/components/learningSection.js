import React from "react";
import ProgressBar from "../elements/progressBar";

export const LearningSection = () => {
    const courses = [
        {
            name: "DSA with C++",
            author: "Raj Vikramaditya",
            channel: "Striver",
            thumbnail:
                "https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png",
            progress: 40,
        },
        {
            name: "Machine Learning",
            author: "Kunal Kushwaha",
            channel: "Code for Cause",
            thumbnail:
                "https://prod-discovery.edx-cdn.org/media/course/image/156313d6-f892-4b08-9cee-43ea582f4dfb-7b98c686abcc.small.png",
            progress: 0,
        },
        {
            name: "ReactJS",
            author: "Vinod Thapa",
            channel: "Thapa Technical",
            thumbnail:
                "https://s35691.pcdn.co/wp-content/uploads/2021/08/young-man-with-computer-fills-schedule-calendar-and-complete-business-vector-id1161496973.jpg",
            progress: 10,
        },
    ];

    return (
        <div className="flex flex-row gap-10 mx-20 border-2 border-dark bg-light rounded-xl p-10">
            {courses.map(course => {
                return (
                    <div className="bg-[#ffffff] w-60 border-2 border-secondary rounded-lg p-2">
                        <img src={course.thumbnail} alt="course" />
                        <div className="space-y-2 px-2 py-4 text-sm">
                            <p className="text-xl font-bold">{course.name}</p>
                            <p>
                                {course.author}, {course.channel}
                            </p>
                            <ProgressBar completed={course.progress} />
                            <p>{course.progress}% complete</p>
                            <button className="border rounded-full px-4 py-2 w-full font-semibold text-[#ffffff] bg-primary hover:bg-dark text-base">
                                {course.progress === 0 ? "Start" : "Continue"}{" "}
                                Learning
                            </button>
                        </div>
                    </div>
                );
            })}
            <div className="bg-[#ffffff] w-60 border-2 border-secondary rounded-lg p-2">
                <div className="m-16">
                    <img src="/svg/add.svg" alt="add" width={100} />
                </div>
                <button className="border rounded-full px-10 py-2 font-semibold w-full text-[#ffffff] bg-primary hover:bg-dark text-base mt-6">
                    Add New Course
                </button>
            </div>
        </div>
    );
};
