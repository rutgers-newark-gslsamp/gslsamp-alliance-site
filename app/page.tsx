// components
import AllianceGrid from "../src/components/AllianceGrid";
import CarouselHero from "../src/components/CarouselHero";
import CarouselVideo from "../src/components/CarouselVideo";
import AllianceScroll from "../src/components/AllianceScroll";

// images
import heroImage1 from "../public/hero/hero_image_1.png";
import heroImage2 from "../public/hero/hero_image_2.png";
import heroImage3 from "../public/hero/hero_image_3.png";

export default function Home() {

  // hero carousel images array
  const heroImages = [heroImage1, heroImage2, heroImage3];

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
      <div className="flex flex-col md:flex-row w-full md:w-[80%] mx-auto">

        {/* About us */}
        <div className="w-full md:w-[70%] flex justify-center items-center flex-col">
          <h1 className="text-center m-4 text-3xl md:text-4xl font-bold">About the Garden State LSAMP</h1>
          <p className="text-[1.2rem] md:text-[1.75rem] p-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porttitor felis. Ut placerat risus ultrices ipsum tempor consectetur in sed nisi. Vestibulum aliquam, mauris non ornare pretium, purus velit malesuada est, eu commodo dui enim luctus tellus. Nulla eu eleifend enim. In hac habitasse platea dictumst. Donec pellentesque aliquet sollicitudin. Nam diam lectus, lacinia sed tincidunt eget, porttitor ac ante. Mauris semper vehicula ligula, ut blandit dui aliquet et. Vivamus eget mollis libero, eu interdum elit. Nunc auctor consectetur turpis, eu hendrerit felis bibendum vel.</p>
        </div>

        {/* LinkedIn */}
        <div className="w-full md:w-[30%] flex justify-center">
          <div className="border border-gray-300 drop-shadow w-[30rem] h-[18rem] md:w-[22rem] md:h-[30rem] m-8 bg-off_white rounded-3xl text-center">
            LinkedIn feed here
          </div>
        </div>

      </div>

      {/* Page content -- Layer 2 */}
      <div className="w-full p-4 flex flex-col items-center">

        {/* Testimonials */}
        <h1 className="text-center p-4 text-3xl font-bold">Hear from our scholars!</h1>
        <CarouselVideo videos={testimonialVideos} />
      </div>
      

      {/* GS-LSAMP Alliance members */}
      <section className="alliance_container bg-rutgers_red">
        <h1 className="text-3xl p-6 text-white font-bold underline italic drop-shadow-xl">GS-LSAMP Alliance Schools</h1>
        <AllianceGrid />
      </section>
    </>
  );
}
