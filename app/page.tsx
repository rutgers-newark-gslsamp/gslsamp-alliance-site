// components
import AllianceGrid from "../src/components/AllianceGrid";
import CarouselHero from "../src/components/CarouselHero";
import CarouselVideo from "../src/components/CarouselVideo";
import AllianceScroll from "../src/components/AllianceScroll";
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
          <h1 className="m-4 pt-6 text-2xl md:text-5xl font-bold italic">About the Garden State LSAMP</h1>
          <p className="text-[1.2rem] md:text-[1.3rem] p-4 text-left w-[90%] leading-loose">&emsp;&emsp;The Garden State LSAMP (Louis Stokes Alliance for Minority Participation) is an alliance of eight NJ universities (Fairleigh Dickinson, Kean, Montclair State, NJIT, Rutgers – New Brunswick and Newark, Essex County College, and William Paterson) and one community college (Essex County), aimed at helping students succeed in non-medical Science, Technology, Engineering and Mathematics (STEM) majors. Started in 1991 and funded by the National Science Foundation, LSAMP is a nationwide program designed to increase the number of professionals from minority groups that are traditionally underrepresented in STEM fields (see below for eligibility requirements). The program provides support services at many levels to help interested students be successful in STEM majors, such as academic support and specialized advising. Students are also eligible for mentoring, free tutoring services and paid research opportunities with university faculty. The program now includes over 50 alliances and is considered one of the most successful of its kind.


            <br /> <br />STEM fields are exciting and challenging, and lead to rewarding and stable careers! Most of the problems our world faces are being addressed by professionals in STEM areas. Whether it is to address global warming, energy production, food production, finding cures to disease, information technology or space travel, it will require a vast supply of STEM professionals for success. There is a severe shortage of people with this kind of training in the United States. For that reason, the U.S. is falling behind many countries in our ability to compete, which will have dire consequences for our country in the long run.


            <br /> <br />Since its inception in 2009, the mission of the Garden State LSAMP has been to increase the interest, retention, graduation and success of students from racial and ethnic groups that are historically underrepresented in STEM fields. Phase II of the program (2014-2019) focused on 1) assisting community college students to successfully transfer to four-year programs, 2) preparing and assisting students to matriculate into graduate programs, and 3) increasing student opportunities for international experiences. Phase III (2019-2024) will continue these goals as well as 1) increase STEM degrees awarded to underrepresented minority students by 60%, 2) increase the number of LSAMP scholars continuing to graduate school by 25%, and 3) increase international experiences by 25%.</p>
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
