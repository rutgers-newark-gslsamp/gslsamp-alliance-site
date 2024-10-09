// components
import Title from "../../src/components/Title";
import Image from "next/image";
import Link from "next/link";

// images
import downloadIcon from "../../public/icons/download_icon.png";
import backdrop from "../../public/generic_backdrop.jpg";

export default function Eligibility() {
  return (
    <>
      <Title name="Eligibility for Membership"/>

      {/* Content specific to Eligibility & Benefits page */}
      <main className="flex justify-center items-center flex-col align-middle w-auto pt-[1rem]">
        {/* Program requirements */}
        <div className="eligibilityBg h-[20rem] systemicBg flex justify-center items-center w-full">

          <div id="eligibility_container" className="w-full flex justify-center">
            <div className="flex flex-col items-center md:w-[40rem] mt-[1rem] justify-center mb-2 bg-white border-2 border-dark_rutgers_red rounded-lg shadow-md">
              <article className="overflow-auto w-full">
                <h1 className="text-center w-full p-1 bg-gradient-to-t from-rutgers_red to-dark_rutgers_red text-white text-sm md:text-xl font-medium drop-shadow-md rounded-tl-xlg rounded-tr-xlg">
                  To become an LSAMP Scholar, you must...
                </h1>

                <div className="text-sm md:text-base font-medium px-2 drop-shadow-md text-black py-2">        
                  <div className="list-decimal-m">Be a US citizen or permanent resident.</div>
                  <div className="list-decimal-m">Improve participation of underserved racial or ethnic groups in STEM.</div>
                  <div className="list-decimal-m">Be fully matriculated at your Alliance school.</div>
                  <div className="list-decimal-m">Major or intend to major in a non-medical STEM field.</div>
                </div>
              </article>

              <a href="/eligibility.pdf" target="_blank">
                <button className="border-2 rounded-lg text-white bg-gradient-to-t from-rutgers_red to-dark_rutgers_red p-2 m-2 underline w-[12rem]">
                  List of eligible majors <Image src={downloadIcon} alt="download icon" className="w-[1rem] ml-3 shadow-md"></Image>
                </button>
              </a>

            </div>
          </div>
        </div>

        {/* Student benefits */}
        <Title name={"Student Benefits"}/>

        <h3 className="pl-2 bg-off_white mx-8 text-xl">
          LSAMP Scholars have outstanding opportunities 
          to help them complete a degree in STEM fields, 
          allowing them to:
        </h3>

        {/* List */}
        <div className="m-2 bg-dark_off_white text-wrap flex flex-col items-center text-xl w-full">
          
          <div className="p-6 mx-4 flex flex-col items-center">
                
                    <p className="text-center text-gray-700 shadow m-4 md:w-[50rem] p-4 bg-off_white">
                      Be part of a Learning Community of students who help each other succeed in classes.
                    </p>
                    <p className="text-center text-gray-700 shadow m-4 md:w-[50rem] p-4 bg-off_white">
                      Have counselors who will personally help you choose courses and programs to best suit your interests.
                    </p>
                    <p className="text-center text-gray-700 shadow m-4 md:w-[50rem] p-4 bg-off_white">
                      Stipends awarded for tutoring, leading study groups, doing research, and peer mentoring.
                    </p>
                    <p className="text-center text-gray-700 shadow m-4 md:w-[50rem] p-4 bg-off_white">
                      Have research experiences in your area of interest in faculty laboratories.
                    </p>
                    <p className="text-center text-gray-700 shadow m-4 md:w-[50rem] p-4 bg-off_white">
                      Attend LSAMP conferences to be part of the greater LSAMP community.
                    </p>
                    <p className="text-center text-gray-700 shadow m-4 md:w-[50rem] p-4 bg-off_white">
                  Graduate with a solid degree and have opportunities for careers or graduate school.
                    </p>
                    <p className="text-center text-gray-700 shadow m-4 md:w-[50rem] p-4 bg-off_white">
                  Tutoring and group learning opportunities to help you succeed in your studies.
                    </p>
                </div>

        </div>
        
      </main>
    </>
  );
}
  