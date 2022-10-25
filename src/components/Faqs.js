import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Faqs = () => {
    const questions = [
        {
            question: "How can I add course ?",
            answer: "Just paste the link of the playlist that you want to add as a course. In playlist link we are intrested in playlist ID which is available in playlist URL under 'list' attribute. Example :- https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi",
        },
        {
            question: "How can I add notes ?",
            answer: "When you play a particular video, you will see a notes section there. Just write your notes there and click 'Add Note'. Your note will be saved and shown to you in that section itself with timestamp.",
        },
    ];
    return (
        <div className="flex flex-col gap-10">
            <Header currentPage="FAQs" />
            <h2 className="text-primary text-center text-2xl font-bold">
                FAQs (Frequently Asked Questions) :-
            </h2>
            <div className="m-auto border-2 border-dark bg-light rounded-xl p-8 text-lg w-8/12 ">
                {questions.map((question, index) => {
                    return (
                        <>
                            <p className="font-semibold">
                                {index + 1}. {question.question}
                            </p>
                            <p className="pl-10">{question.answer}</p>
                            <br />
                        </>
                    );
                })}
            </div>
            <Footer />
        </div>
    );
};
