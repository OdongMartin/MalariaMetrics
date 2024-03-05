'use client'

import Image from 'next/image'
import Slider from 'react-slick';

//importing css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Facts = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };
      return (
        <div className='flex justify-center items-center'>
            {/* <h1 className="text-3xl font-bold mt-2 ml-10 mb-6">Malaria Information</h1> */}
        
            <div
            className=' md:col-span-2 relative md:h-[70vh] h-[50vh] w-[96vw] md:w-[32vw] lg:w-[35vw] mx-4 p-8 border rounded-lg bg-gray-300'
            // style={{
            // width: "400px",
            // height: "400px",
            // //   padding: "20px",
            // //   cursor: "pointer",
            // }}
            >
                <Slider {...settings} >
                    <div>
                        <div className="mb-6">
                            {/* <h2 className="text-2xl font-bold mb-2">Overview of Malaria</h2> */}
                            <div>
                                <p>Malaria is a life-threatening disease caused by parasites transmitted through the bites of infected female Anopheles mosquitoes.</p>
                                
                                <div className='m-2'>
                                    <Image src='/images/mosquito-bite.jpg' width={400} height={400} alt=" " className='rounded-lg'/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            {/* <h2 className="text-2xl font-bold">Global Burden</h2> */}
                            <p>Malaria affects over 200 million people annually worldwide.</p>
                            <div className='m-2 mt-6'>
                                <Image src='/images/sick-people.jpg' width={400} height={400} alt=" " className='rounded-lg'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            {/* <h2 className="text-2xl font-bold mb-2">Morbidity and Mortality</h2> */}
                            <p>Every two minutes, a child dies from malaria.</p>
                            <div className='m-2 mt-6'>
                                <Image src='/images/cemetary.jpg' width={400} height={400} alt=" " className='rounded-lg'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            {/* <h2 className="text-2xl font-bold mb-2">Economic Impact</h2> */}
                            <p>Malaria is preventable and treatable with cost-effective interventions.</p>
                            <div className='m-2 mt-6'>
                                <Image src='/images/spray.jpg' width={400} height={400} alt=" " className='rounded-lg'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            {/* <h2 className="text-2xl font-bold mb-2">Affected Populations</h2> */}
                            <p>The majority of malaria cases and deaths occur in sub-Saharan Africa.</p>
                            <div className='m-2 mt-6'>
                                <Image src='/images/sub-sahara.jpg' width={400} height={400} alt=" " className='rounded-lg'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            {/* <h2 className="text-2xl font-bold mb-2">Transmission Dynamics</h2> */}
                            <p>Insecticide-treated bed nets and indoor residual spraying are effective in preventing malaria.</p>
                            <div className='m-2 mt-6'>
                                <Image src='/images/mosquito-net.jpg' width={400} height={400} alt=" " className='rounded-lg'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            {/* <h2 className="text-2xl font-bold mb-2">Risk Factors</h2> */}
                            <p>Malaria contributes to poverty by reducing productivity and increasing healthcare costs.</p>
                            <div className='m-2 mt-6'>
                                <Image src='/images/beggar.jpg' width={400} height={400} alt=" " className='rounded-lg'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            {/* <h2 className="text-2xl font-bold mb-2">Preventive Measures</h2> */}
                            <p>Global malaria mortality rates have declined by over 60% since 2000.</p>
                            <div className='m-2 mt-6'>
                                <Image src='/images/african-children.jpeg' width={400} height={400} alt=" " className='rounded-lg'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            {/* <h2 className="text-2xl font-bold mb-2">Diagnostic Tools</h2> */}
                            <p>Ongoing research and innovation are essential for combating malaria.</p>
                            <div className='m-2 mt-6'>
                                <Image src='/images/research.jpg' width={400} height={400} alt=" " className='rounded-lg'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            {/* <h2 className="text-2xl font-bold mb-2">Treatment Options</h2> */}
                            <p>Climate change can influence malaria transmission patterns.</p>
                            <div className='m-2 mt-6'>
                                <Image src='/images/fumes.jpg' width={400} height={400} alt=" " className='rounded-lg'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            {/* <h2 className="text-2xl font-bold mb-2">Progress and Challenges</h2> */}
                            <p>Collaboration and partnerships are crucial for malaria control efforts.</p>
                            <div className='m-2 mt-6'>
                                <Image src='/images/shake-hands.jpg' width={400} height={400} alt=" " className='rounded-lg'/>
                            </div>
                        </div>
                    </div>
                    
                </Slider>
            </div>
        </div>
      );
}

export default Facts