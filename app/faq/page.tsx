// Components
import Title from "../../src/components/Title";
import FAQSection from "../../src/components/FaqSection";
import Image from "next/image";

// Images
import downloadIcon from "../../public/icons/download_icon.png";

export default function Faq() {
  return (
    <>
      {/* FAQ */}
      <Title name={"Frequently Asked Questions"} />
      
      <div className="mt-5 bg-dark_off_white flex flex-col items-center" >
        <FAQSection />
      </div>

      {/* Resources */}
      <Title name={"GS-LSAMP Resources"} />
      <h1 className="text-center text-lg"> Click on the buttons below to download some of our resources.</h1>

      <div className="flex justify-center">
        <div className="m-5 grid sm:grid-cols-2 w-[50rem] justify-items-center">
          <a href="/phd-2020.pdf" download="phd_program_applicant_checklist.pdf" className="resource bg-gradient-to-t from-rutgers_red to-dark_rutgers_red border-dark_rutgers_red">
              <p className="my-1 drop-shadow text-lg">PhD program Applicant Checklist</p>
              <Image src={downloadIcon} alt="download icon" className="w-[1.5rem] drop-shadow ml-[1rem]"></Image>
          </a>

          <a href="/nc-2020.pdf" download="nationally_competitive_fellowships.pdf">
          <div className="resource bg-gradient-to-t from-rutgers_red to-dark_rutgers_red border-dark_rutgers_red">
            <p className="my-1">List of Nationally Competitive Fellowships</p>
            <Image src={downloadIcon} alt="download icon" className="w-[1.5rem] drop-shadow ml-[1rem]"></Image>
          </div>
          </a>

          <a href="/studies-2020.pdf" download="graduate_presentation.pdf">
          <div className="resource bg-gradient-to-t from-rutgers_red to-dark_rutgers_red border-dark_rutgers_red">
            <p className="my-1">Consider Graduate Studies Presentation</p>
            <Image src={downloadIcon} alt="download icon" className="w-[1.5rem] drop-shadow ml-[1rem]"></Image>
          </div>
          </a>
          
          <a href="/STEM Resources New Jersey Hgher Ed.pdf" download="further_resources.pdf">
            <div className="resource bg-gradient-to-t from-rutgers_red to-dark_rutgers_red border-dark_rutgers_red">
              <p className="my-1">Further Resources for Ineligible Students</p>
              <Image src={downloadIcon} alt="download icon" className="w-[1.5rem] drop-shadow ml-[1rem]"></Image>
            </div>
          </a>
        </div>
      </div>
      

    </>
  );
}
  