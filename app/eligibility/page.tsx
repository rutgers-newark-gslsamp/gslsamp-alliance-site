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
      <Title name={"Eligibility for Membership"}/>

      {/* Content specific to Eligibility & Benefits page */}
      <main className="flex justify-center items-center flex-col align-middle w-auto pt-[1rem]">
        <Image src={backdrop} alt="background image" className="relative w-full h-[20rem] object-cover"></Image>
        
        {/* Program requirements */}
        <div id="eligibility_container" className="w-full flex justify-center py-[1rem] absolute top-[12rem]">
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

            {/* Download Eligible Majors - new tab or just normal download */}
            <Link href="/eligibility/majors" target="_blank">
              <button className="border-2 rounded-lg text-white bg-gradient-to-t from-rutgers_red to-dark_rutgers_red p-2 m-2 underline w-[12rem]">
                List of eligible majors <Image src={downloadIcon} alt="download icon" className="w-[1rem] ml-3 shadow-md"></Image>
              </button>
            </Link>

          </div>
        </div>

        {/* Student benefits */}
        <Title name={"Student Benefits"}/>

        <h3 className="pl-2 bg-off_white m-2 text-xl font-semibold">
          LSAMP Scholars have outstanding opportunities <br className="visible sm:hidden" />
          to help them complete a degree in STEM fields, <br className="visible sm:hidden" />
          allowing them to:
        </h3>

        <div className="m-2 bg-dark_off_white text-wrap flex flex-col items-center text-xl w-full">
          <ol type="1" className="font-medium leading-loose md:list-decimal w-full">
            <li className="text-center">Be part of a Learning Community of students who help each other succeed in classes.</li>
            <li className="bg-off_white w-full text-center">Have counselors who will personally help you choose courses and programs to best suit your interests.</li>
            <li className="text-center">Stipends awarded for tutoring, leading study groups, doing research, and peer mentoring.</li>
            <li className="bg-off_white text-center">Have research experiences in your area of interest in faculty laboratories.</li>
            <li className="text-center">Attend LSAMP conferences to be part of the greater LSAMP community.</li>
            <li className="bg-off_white text-center">Graduate with a solid degree and have opportunities for careers or graduate school.</li>
            <li className="text-center">Tutoring and group learning opportunities to help you succeed in your studies.</li>
          </ol>

        </div>
        
      </main>
    </>
  );
}
  