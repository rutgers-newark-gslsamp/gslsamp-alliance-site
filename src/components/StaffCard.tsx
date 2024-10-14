import React from "react";
import Image, { StaticImageData } from "next/image";

interface StaffCardProps {
    picture: StaticImageData;
    name: string;
    role: string;
    university: string;
    email: string;
    phone: string;
}

const StaffCard: React.FC<StaffCardProps> = ({ picture, name, role, university, email, phone }) => {
    return (
        <div className="w-[20rem] md:w-[15rem] h-[20rem] flex flex-col items-center justify-center m-4  shadow rounded-3xl bg-white">
            <Image
                src={picture}
                alt={name}
                className="w-32 h-32 rounded-full object-cover m-4"
            />
            <div className="text-center text-white w-full h-full rounded-b-3xl bg-gradient-to-t from-rutgers_red to-dark_rutgers_red flex flex-col items-center justify-center">
                <h3 className="text-base font-bold">{name}</h3>
                <div className="w-full text-sm">
                    <p className="font-medium italic">{role}</p>
                    <br />
                    <p className="text-base">{university}</p>
                    <i className="text-base">{email}</i><br/>
                    <i className="text-base">{phone}</i>
                </div> 
            </div>
        </div>
    );
}

export default StaffCard;
