import Title from "../../src/components/Title";

export default function Eligibility() {
  return (
    <>
      {/*Title component*/}
      <Title name={"Eligibility for Admission"}/>

      {/* Content specific to Eligibility & Benefits page */}
      <main className="flex justify-center align-middle w-auto pt-[1rem]">
        {/* Program requirements */}
        <div id="eligibility_container" className="w-full flex justify-center">
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

            <h2 className="text-center underline font-bold text-burgundy">Eligible Majors</h2>
            <div className="w-[90%] h-[40vh] m-2 border-2 border-burgundy rounded-lg drop-shadow-md">
              <iframe className="w-full h-full" src="https://drive.google.com/file/d/1C9923MSHlXUsvkS08pFduFjVi_FKw29V/preview" allow="autoplay"></iframe>
            </div>
          </div>
        </div>

        
        
      </main>
    </>
  );
}
  