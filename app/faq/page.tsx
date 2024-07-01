import Title from "../../src/components/Title";
import FAQSection from "../../src/components/FaqSection";

export default function Faq() {
  return (
    <>
      {/* FAQ */}
      <Title name={"Frequently Asked Questions"} />
      
      <div className="mt-5 bg-light_burgundy flex flex-col items-center" >
        <FAQSection />
      </div>

      {/* Resources */}
      <Title name={"GS-LSAMP Resources"} />

      <div className="bg-light_burgundy m-5 flex flex-col items-center">
        <div className="resource">
          <p className="my-1">PhD program Applicant Checklist</p>
          <a href="/phd-2020.pdf" download="phd_program_applicant_checklist.pdf"><button className="download_btn">DOWNLOAD</button></a>
        </div>
        <div className="resource">
          <p className="my-1">List of Nationally Competitive Fellowships</p>
          <a href="/nc-2020.pdf" download="nationally_competitive_fellowships.pdf"><button className="download_btn">DOWNLOAD</button></a>
        </div>
        <div className="resource">
          <p className="my-1">Consider Graduate Studies Presentation</p>
          <a href="/studies-2020.pdf" download="graduate_presentation.pdf"><button className="download_btn">DOWNLOAD</button></a>
        </div>
        <div className="resource">
          <p className="my-1">Further Resources for Ineligible Students</p>
          <a href="/STEM Resources New Jersey Hgher Ed.pdf" download="further_resources.pdf"><button className="download_btn">DOWNLOAD</button></a>
        </div>
      </div>

    </>
  );
}
  