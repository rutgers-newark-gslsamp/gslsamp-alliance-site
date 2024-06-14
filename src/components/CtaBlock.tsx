import React from "react";

const CtaBlock: React.FC = () => {
    return (
        <aside className="lg:translate-y-[-90%] flex flex-col items-center justify-center lg:absolute lg:max-w-1/2 w-full md:h-1/2 lg:h-3/5 xl:h-[45%] lg:w-1/3 xl:w-1/3 shadow-md lg:rounded-3xl px-5 py-4 lg:right-5 bg-gradient-to-t from-red-900 to-red-600">
            <div className="flex text-white font-bold text-left lg:mr-4 cta-headline">
                <h2 className="text-base md:text-xl lg:text-2xl " id="landing-cta-headline">Increasing the retention, graduation and success of underrepresented minorities STEM.</h2>
            </div>
            <nav className="flex justify-center m-2 gap-3 cta-button-wrapper">
                <button className="w-1/2 h-12 lg:h-14 p-2 lg:w-full bg-white hover:bg-neutral-300 rounded shadow-md" id="cta-join-now-button">
                    <a className="text-black font-bold uppercase text-sm lg:text-base" href="/membership">Join Now</a>
                </button>
                <button className="w-1/2 h-12 lg:h-14 p-2 lg:w-full hover:underline bg-red-700 hover:bg-red-800 rounded border-4 border-white shadow-md " id="cta-learn-more-button">
                    <a className="font-bold text-white uppercase text-sm lg:text-base" href="/membership">Eligibility</a>
                </button>
            </nav>
        </aside>  
    );
}

export default CtaBlock;