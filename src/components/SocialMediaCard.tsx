// components
import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface SocialMediaCardProps {
    picture: StaticImageData;
    profileName: string;
    banner: StaticImageData;
    children: ReactNode
}

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({ picture, profileName, banner, children }) => {
    return (
        <>
            <div className="drop-shadow w-[22rem] lg:w-[24rem] h-[18rem] m-8 bg-white rounded-3xl text-center bg-white mx-auto">
                {/* Banner */}
                <div className="sc_banner rounded-t-3xl">
                    <Image src={banner} alt="Social Media Banner" className="rounded-t-3xl relative bottom-1"/>
                    <Image src={picture} alt="Social Media Profile Pic" className="relative w-[5rem] rounded-full left-4 bottom-12 border shadow-md z-20"/>
                </div>

                <div className="relative bottom-16">
                    <h1 className="text-xl italic font-semibold pl-10">{profileName}</h1>
                    <div className="flex flex-col shadow-inner mt-[1rem]">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SocialMediaCard;
