import rabinovich from "../../public/staff-pictures/rabinovich.jpeg"
import sanMiguel from "../../public/staff-pictures/Dr_San_Miguel.jpg"
import gates from "../../public/staff-pictures/Dr_Gates.jpg"
import StaffCard from "../../src/components/StaffCard";
import EventInfoCard from "../../src/components/EventInfoCard";
import Title from "../../src/components/Title.tsx";
import Carousel from "../../src/components/Carousel";

import image1 from "../../public/club-carousel/image1.jpg";
import image2 from "../../public/club-carousel/image2.jpg";
import image3 from "../../public/club-carousel/image3.jpg";
import image4 from "../../public/club-carousel/image4.jpg";
import image5 from "../../public/club-carousel/image5.jpg";

export default function About() {
  const images = [image1, image2, image3, image4, image5];

  return (
    <>
      {/*Title component*/}
      <main className="about-description-container">
        {/* <Title name={"ABOUT US"} /> */}
        
      </main>




      {/* <section className="staff-section-container">
        <div className="section-subheader mx-4 md:mx-8 lg:mx-16">
          <h2 className="text-3xl font-bold text-neutral-800">Staff</h2>
          <hr/>
        </div>
        <div id="staff-card-container" className="grid md:grid-cols-2 lg:grid-cols-3 mx-4 md:mx-16">
          <StaffCard 
            picture={gates}
            name="Alexander Gates, PhD"
            role="Executive Director of GS-LSAMP"
            university="Rutgers University - Newark"
            email="agates@newark.rutgers.edu"
            phone="(973) 353-5034"
          />
          <StaffCard 
            picture={sanMiguel}
            name="Cristiane San Miguel, Ph.D"
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
      </section> */}
   
    </>
  );
}
  