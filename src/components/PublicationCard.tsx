// components
import React, { ReactNode } from "react";
import Link from "next/link";

interface PublicationCardProps {
    title: string;
    authors: string;
    year: string;
    url: string;
    source: string;
    publisher?: string;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ title, authors, year, url, source, publisher }) => {
    return (
        <>
            <div className="w-[20rem] mx-auto border-b-8 bg-white shadow-lg p-4 flex flex-col justify-between rounded-lg">
                <h1 className="text-xl">{title}</h1>
                <p className="text-right text-lg text-gray-500 mb-0 mt-auto">{year}</p> 
                <hr className="my-2"/>

                {/* Description */}
                <p className="text-lg"> 
                    <b>{authors}</b>
                    <br />
                    <i>{source}</i>
                </p>

                {/* Publisher */}
                { 
                    publisher != null && (
                        <>
                            <p className="text-right">{publisher}</p>
                        </>
                    )
                }

                {/* Read button */}
                <Link href={url} target="_blank">
                    <button className="bg-rutgers_red mr-0 ml-auto text-white py-2 px-4 mt-2 shadow-md border-b-4 border-dark_rutgers_red rounded-lg">
                        Read
                    </button>
                </Link>
            </div>
        </>
    );
}

export default PublicationCard;
