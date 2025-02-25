// components
import TitleHeader from"../../src/components/TitleHeader";
import StaffCard from "../../src/components/StaffCard";

// images
import sanMiguel from "../../public/staff-pictures/Dr_San_Miguel.jpg"
import gates from "../../public/staff-pictures/Dr_Gates.jpg"

export default function Contact() {
  return (
    <>
        <TitleHeader first="Contact" second="Us" />

        {/* STAFF */}
        <section className="self-center mb-8">
            

            <div id="staff-card-container" className="grid md:grid-cols-2 justify-items-center">
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
            </div>
        </section>
        
    </>
  );
}
  