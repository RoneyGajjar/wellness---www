const Hero = () => {
  return (
  <>
{/*nav bar */}
    <div className="bg-stone-200">
      <div className="bg-stone-200 px-6 py-8 lg:px-8 flex items-center justify-between mx-auto max-w-7xl">
        <div className="flex lg:flex-1">
          <a href="#home" className="-m-1.5 p-1.5">
            <span className="sr-only" >Your Company</span>
            <img src="/sonalogo.svg" alt="" className="h-8 w-auto" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 text-base leading-6 text-gray-900">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#contact" className="justify-center rounded-full gap-3 bg-orange-800 px-7.5 py-4.5 text-base font-semibold text-white">Contact Us <span aria-hidden="true">→</span></a>
        </div>
      </div>
      </div>

      {/* Hero section */}
      <div>
        <div className="flex flex-col items-center justify-center px-6 py-24 lg:px-8 bg-stone-200">
          <p className="text-sm leading-4 text-gray-600 uppercase">easy to find, hard to leave</p>
          <h1 className="mt-10 text-4xl tracking-tighter text-gray-900 sm:text-8xl text-center max-w-5xl ">Gentle Healing for a Healthier Tomorrow</h1>
          <p className="mt-6 text-base leading-6 text-gray-600 max-w-lg text-center">Expert Homeopathic Care Tailored to You. Experience natural, comprehensive healing with a registered professional in Auckland.</p>
          <div className="mt-12 flex items-center">
            <a href="#services" className="justify-center rounded-full gap-3 bg-orange-800 px-7.5 py-4.5 text-base font-semibold text-white">Explore Our Services</a>
          </div>
        </div>
      </div>
      {/* <div className="w-full aspect-video">
        <img src="/heroimg1.jpg" />
      </div> */}
      </>
    ); 
 }

 export default Hero;