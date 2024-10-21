// components
import AllianceGrid from "../src/components/AllianceGrid";
import CarouselHero from "../src/components/CarouselHero";
import CarouselVideo from "../src/components/CarouselVideo";
import SocialMediaCard from "../src/components/SocialMediaCard";
import Image from "next/image";

// images
import heroImage1 from "../public/hero/hero_image_1.jpg";
import heroImage2 from "../public/hero/hero_image_2.jpg";
import heroImage3 from "../public/hero/hero_image_3.jpg";
import heroImage4 from "../public/hero/hero_image_4.jpg";
import liBanner from "../public/icons/linkedin_bg.jpg";
import liPfp from "../public/icons/linkedin_pfp.jpg";
import linkedInIcon from "../public/icons/linkedin_logo.png";

export default function Home() {

  // hero carousel images array
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];

  // testimonial videos array
  const testimonialVideos = [
    'https://youtu.be/oSkjtPdGvfc?si=MTyOX2l9vo8EAMkH',
    'https://youtu.be/PaEkpST0_W0?si=Pw0GxlP6-FqXUxuA',
    'https://youtube.com/shorts/vrIrUVbmjAg?si=pX6l4IFeFhQsSWy_'
  ];

  return (
    <>
      {/* Hero images carousel */}
      <CarouselHero images={heroImages}/>

      {/* Page content -- Layer 1*/}
      <div className="flex flex-col 2xl:flex-row w-full md:w-[80%] mx-auto mt-[2rem]">

        {/* About us */}
        <div className="w-full 2xl:w-[70%] flex justify-center items-center flex-col">

          {/* Header */}
          <div className="flex m-4 pt-6 text-3xl md:text-5xl font-bold italic underline underline-offset-8 decoration-1 decoration-dark_rutgers_red">
            <h1 className="">About</h1>
            <h1 className="text-dark_rutgers_red">&nbsp;GS-LSAMP</h1>
          </div>
          
          <p className="text-[1.2rem] md:text-[1.3rem] p-4 text-left w-[90%] leading-loose">&emsp;&emsp;STEM fields are exciting and challenging, and lead to rewarding and stable careers! Most of the problems our world faces are being addressed by professionals in STEM areas. Whether to address climate change, sustainable energy production, food production, finding cures to disease, information technology or space travel, it will require a vast supply of STEM professionals for success. Currently, there is a severe shortage of people with this kind of training in the United States. For that reason, the U.S. is falling behind many countries in our ability to compete, which will have dire consequences for our country in the long run.


            <br /> <br />Started in 1991 and funded by the National Science Foundation, the Louis Stokes Alliance for Minority Participation (LSAMP) program is designed to increase the number of professionals from minority groups that are traditionally underrepresented in Science, Technology, Engineering and Mathematics (STEM) fields. The program provides support services at many levels to help interested students be successful in STEM majors, such as academic support and specialized advising. Students are also eligible for mentoring, free tutoring services and paid research opportunities with university faculty. The program now includes over 60 alliances nationwide and is considered one of the most successful of its kind.


            <br /> <br />The Garden State (GS)-LSAMP is an alliance of seven NJ universities (Fairleigh Dickinson, Kean, Montclair State, NJIT, Rutgers – New Brunswick and Newark, and William Paterson) and one community college (Essex County College) aimed at helping students succeed in non-medical STEM majors. Since its inception in 2009, the mission of GS-LSAMP has been to increase the interest, retention, graduation and success of students from racial and ethnic groups that are historically underrepresented in STEM fields (see below for eligibility requirements). Now a senior alliance, GS-LSAMP has produced multiple peer-reviewed articles on underrepresented minority education (see references). In Phase III (2019-2024), GS-LSAMP has continued to assist community college students to successfully transfer to four-year programs, annually increase the number of STEM degrees awarded to underrepresented minority students, prepare students to matriculate into graduate programs, and increase student opportunities for international experiences. GS-LSAMP is currently preparing its proposal for renewal of the grant for Phase IV.</p>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-center justify-start w-full 2xl:w-[30%] mx-[0.5rem]">

          {/* LinkedIn */}
          <div className="">
            <SocialMediaCard profileName="GS-LSAMP Alliance" picture={liPfp} banner={liBanner}>
              
              <p className="text-left text-lg p-4">Check out our LinkedIn to stay up to date with GS-LSAMP news!</p>

              <div className="w-full bg-[#0072b1] rounded-b-3xl h-[3.3rem] py-[0.6rem] ">
                {/* LinkedIn Button */}
                <a href="https://www.linkedin.com/in/gs-lsamp-alliance/" target="_blank">
                  <button className="ml-auto mr-6 border w-[7rem] h-[2rem] flex rounded-full shadow-lg border-white bg-white">
                    
                    <Image src={linkedInIcon} alt="Linked In Logo" className="w-[2rem] p-1"/>
                    <p className="text-[#0072b1] font-bold pr-[0.75rem]">Connect</p>
                    
                  </button>
                </a>
              </div>
              
            </SocialMediaCard>
          </div>

          {/* Testimonials */}
          <h1 className="text-center p-4 text-2xl font-bold">Hear from our scholars!</h1>
          <CarouselVideo videos={testimonialVideos} />
        </div>

      </div>
      
      {/* GS-LSAMP Alliance members */}
      <section className="alliance_container bg-rutgers_red">
        <h1 className="text-3xl p-6 text-white font-bold underline italic drop-shadow-xl text-center">GS-LSAMP Alliance Schools</h1>
        <AllianceGrid />
      </section>
    </>
  );
}
