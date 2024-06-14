//images
import AllianceGrid from "../src/components/AllianceGrid";

export default function Home() {
  return (
    <>
      {/**Title components*/}
      {/**<Title title={"Index Page"} />*/}
      <main className="landing-hero-container">
        {/*Later turn into hero-gallery*/}  
        <figure className="lg:h-96 xl:h-[32rem] md:h-72 h-44 overflow-hidden ">
          {/*refactor src */}
            {/* <Image
              className="hero-picture object-cover h-full opacity-95"
              src={heroPicture}
              alt="Placeholder image"
            /> */}
            {/* <div className="w-1/2 flex items-center">
              <Carousel images={images} />
            </div> */}
        </figure>
          
      </main>

      <section className="flex justify-center my-8 md:my-16 md:mx-8">
      </section>

      <section id='lsamp-alliance-container'>
        <div className="section-header">
            <h2 className="lsamp-alliance-header">GS-LSAMP Alliance</h2>
            <hr className="section-horizontal-line"/>
        </div>
        <AllianceGrid />
      </section>
    </>
  );
}
