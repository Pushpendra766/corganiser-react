import React from "react";
import { useRef, useState } from "react";

export const Comments = ({ videoId }) => {
    return (
        <div className="mx-10 text-lg">
            Sorry but ...😐
            <img src="/comments.png" alt="loading..." />
        </div>
    );
};

export const Description = ({ description }) => {
    const lines = description.split("\n");
    return (
        <div className="p-4">
            {lines.map(line => {
                return (
                    <>
                        <p>{line}</p>
                    </>
                );
            })}
        </div>
    );
};

export const Notes = ({ title, player }) => {
    const [notes, setNotes] = useState([]);
    const note = useRef(null);
    const handleAddNote = () => {
        const timeSec = Math.round(player.current.getCurrentTime());
        const time = `${Math.floor(timeSec / 60)}:${timeSec % 60}`;
        const currentNote = { time: time, note: note.current.value };
        note.current.value = null;
        setNotes(notes => [...notes, currentNote]);
    };

    const handleSeek = timeString => {
        const time = timeString.split(":");
        const timeSec = time[0] * 60 + parseInt(time[1]);
        player.current.seekTo(timeSec, "seconds");
    };
    return (
        <div className="ml-10 mt-6 space-y-8">
            <div className="flex flex-row gap-4 w-full">
                <textarea
                    ref={note}
                    className="border-2 px-2 border-primary bg-light rounded-sm w-96"
                    type="textbox"
                    name="course-name"
                    placeholder={`Write notes at 09:00`}
                />
                <button
                    className={`border rounded-full px-6 py-2 font-semibold text-[#ffffff] bg-primary hover:bg-dark `}
                    onClick={() => {
                        handleAddNote();
                    }}
                >
                    Add Note
                </button>
            </div>
            <p className="text-lg">
                <span className="font-bold">Notes</span> ({title}) :-{" "}
            </p>
            <div className="pl-4">
                {notes
                    .slice(0)
                    .reverse()
                    .map(note => {
                        return (
                            <>
                                <p>
                                    <span
                                        className="font-bold text-dark cursor-pointer"
                                        onClick={() => handleSeek(note.time)}
                                    >
                                        {note.time}
                                    </span>
                                    {"  "}
                                    {note.note}
                                </p>
                                <br />
                            </>
                        );
                    })}
            </div>
        </div>
    );
};
