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
            <div className="border border-gray-300 drop-shadow w-[24rem] h-[17rem] m-8 bg-off_white rounded-3xl text-center bg-white">
                {/* Banner */}
                <div className="sc_banner rounded-t-3xl">
                    <Image src={banner} alt="Social Media Banner" className="rounded-t-3xl relative drop-shadow"/>
                    <Image src={picture} alt="Social Media Profile Pic" className="relative w-[5rem] rounded-full left-4 bottom-12 border shadow-md"/>
                </div>

                <div className="relative bottom-16">
                    <h1 className="text-xl font-semibold pl-10">{profileName}</h1>
                    <div className="flex flex-col">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SocialMediaCard;
