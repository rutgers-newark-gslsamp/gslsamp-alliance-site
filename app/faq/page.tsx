// Components
import Title from "../../src/components/Title";
import TitleHeader from "../../src/components/TitleHeader";
import FAQSection from "../../src/components/FaqSection";
import Image from "next/image";
import StaffCard from "../../src/components/StaffCard";

// Images
import downloadIcon from "../../public/icons/download_icon.png";
import rabinovich from "../../public/staff-pictures/rabinovich.jpeg"
import sanMiguel from "../../public/staff-pictures/Dr_San_Miguel.jpg"
import gates from "../../public/staff-pictures/Dr_Gates.jpg"

export default function Faq() {
  return (
    <>
      {/* FAQ */}
      <TitleHeader first="Frequently asked" second="Questions" />
      
      <div className="flex flex-col items-center" >
        <FAQSection />
      </div>

      {/* Resources */}
      <Title name={"GS-LSAMP Resources"} />

      <h1 className="text-center text-xl mx-4"> Click on the buttons below to download some of our resources.</h1>

      <div className="flex justify-center">
        <div className="m-5 grid sm:grid-cols-2 w-[50rem] justify-items-center">

          <a href="/phd-2020.pdf" target="_blank" className="resource bg-gradient-to-t from-rutgers_red to-dark_rutgers_red border-dark_rutgers_red shadow-md">
              <p className="my-1 drop-shadow text-lg">PhD program Applicant Checklist</p>
              <Image src={downloadIcon} alt="download icon" className="w-[1.5rem] drop-shadow ml-[1rem]"></Image>
          </a>

          <a href="/nc-2020.pdf" target="_blank">
          <div className="resource bg-gradient-to-t from-rutgers_red to-dark_rutgers_red border-dark_rutgers_red shadow-md">
            <p className="my-1">List of Nationally Competitive Fellowships</p>
            <Image src={downloadIcon} alt="download icon" className="w-[1.5rem] drop-shadow ml-[1rem]"></Image>
          </div>
          </a>

          <a href="/studies-2020.pdf" target="_blank">
          <div className="resource bg-gradient-to-t from-rutgers_red to-dark_rutgers_red border-dark_rutgers_red shadow-md">
            <p className="my-1">Consider Graduate Studies Presentation</p>
            <Image src={downloadIcon} alt="download icon" className="w-[1.5rem] drop-shadow ml-[1rem]"></Image>
          </div>
          </a>
          
          <a href="/STEM Resources New Jersey Hgher Ed.pdf" target="_blank">
            <div className="resource bg-gradient-to-t from-rutgers_red to-dark_rutgers_red border-dark_rutgers_red shadow-md">
              <p className="my-1">Further Resources for Ineligible Students</p>
              <Image src={downloadIcon} alt="download icon" className="w-[1.5rem] drop-shadow ml-[1rem]"></Image>
            </div>
          </a>
        </div>
      </div>

      {/* STAFF */}
      <Title name={"Contact our Staff"} />
      <h1 className="text-center text-xl mx-4"> Still have a question? Reach out to our staff for further inquiries.</h1>

      <section className=" self-center mb-8">
            

            <div id="staff-card-container" className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                <StaffCard 
                    picture={gates}
                    name="Alexander Gates, Ph.D."
                    role="Executive Director of GS-LSAMP"
                    university="Rutgers University - Newark"
                    email="agates@newark.rutgers.edu"
                    phone="(973) 353-5034"
                />
                <StaffCard 
                    picture={sanMiguel}
                    name="Cristiane San Miguel, Ph.D."
                    role="Assistant Director of GS-LSAMP"
                    university="Rutgers University - Newark"
                    email="csanmig@newark.rutgers.edu"
                    phone="(973) 353-5846"
                />
                <StaffCard 
                    picture={rabinovich}
                    name="Oren Rabinovich"
                    role="Director of GS-LSAMP"
                    university="Rutgers University - Newark"
                    email="oren.rabinovich@rutgers.edu"
                    phone="(973) 353-3562"
                />
            </div>
        </section>
      

    </>
  );
}
  