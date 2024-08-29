// components
import Title from "../../src/components/Title";
import Image from "next/image";

// images
import downloadIcon from "../../public/icons/download_icon.png";

export default function Eligibility() {
  return (
    <>
      <Title name={"Eligibility for Admission"}/>

      {/* Content specific to Eligibility & Benefits page */}
      <main className="flex justify-center items-center flex-col align-middle w-auto pt-[1rem]">
        
        {/* Program requirements */}
        <div id="eligibility_container" className="w-full flex justify-center py-[1rem]">
          <div className="flex flex-col items-center w-[90%] md:w-[60%] mt-[1rem] justify-center mb-2 bg-white border-2 border-burgundy rounded-lg shadow-md">
            <article className="overflow-auto w-full">
              <h1 className="text-center w-full p-1 bg-burgundy text-white text-sm md:text-xl font-medium drop-shadow-md rounded-tl-xlg rounded-tr-xlg">
                To become an LSAMP Scholar, you must...
              </h1>

              <div className="text-sm md:text-base font-medium px-2 drop-shadow-md text-black py-2">        
                <div className="list-decimal-m">Be a US citizen or permanent resident.</div>
                <div className="list-decimal-m">Improve participation of underserved racial or ethnic groups in STEM.</div>
                <div className="list-decimal-m">Be fully matriculated at your Alliance school.</div>
                <div className="list-decimal-m">Major or intend to major in a non-medical STEM field.</div>
              </div>
            </article>

            <a href="/eligibility.pdf" download="gslsamp_eligible_majors.pdf">
              <button className="border-2 rounded-lg text-white bg-burgundy p-2 m-2 underline w-[12rem]">
                List of eligible majors <Image src={downloadIcon} alt="download icon" className="w-[1rem] ml-3"></Image>
              </button>
            </a>

          </div>
        </div>

        {/* Student benefits */}
        <Title name={"Student Benefits"}/>

        

        <div className="m-2 bg-dark_off_white text-wrap">
          <div className="bg-off_white">
            <h3 className="pl-2">
              LSAMP Scholars have outstanding opportunities
              to help them complete a degree in STEM fields, including:
            </h3>
          </div>
          
          <ol type="1" className="px-10 font-bold leading-loose list-decimal">
            <li>Be part of a Learning Community of students who help each other succeed in classes.</li>
            <li>Have counselors who will personally help you choose courses and programs to best suit your interests.</li>
            <li>Stipends awarded for tutoring, leading study groups, doing research, and peer mentoring.</li>
            <li>Have research experiences in your area of interest in faculty laboratories.</li>
            <li>Attend LSAMP conferences to be part of the greater LSAMP community.</li>
            <li>Graduate with a solid degree and have opportunities for careers or graduate school.</li>
            <li>Tutoring and group learning opportunities to help you succeed in your studies.</li>
          </ol>

        </div>
        
      </main>
    </>
  );
}
  