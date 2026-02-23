const HeroSection = () => {
  // Mock data for the circular images
  const images = [
    { src: '/serviceimg1.webp', pos: 'top-[10%] left-[5%] w-32 h-32' },
    { src: '/serviceimg2.webp', pos: 'top-[40%] left-[15%] w-24 h-24' },
    { src: '/serviceimg3.webp', pos: 'bottom-[10%] left-[8%] w-36 h-36' },
    { src: '/serviceimg.webp', pos: 'top-[10%] right-[5%] w-40 h-40' },
    { src: '/serviceimg5.webp', pos: 'top-[45%] right-[12%] w-28 h-28' },
    { src: '/serviceimg6.webp', pos: 'bottom-[10%] right-[8%] w-32 h-32' },
  ];

  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center bg-white px-6 py-20 overflow-hidden">
      
      {/* Background Decorative Images - Hidden on mobile for better UX */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute rounded-full overflow-hidden border-4 border-white shadow-sm ${img.pos}`}
          >
            <div className="w-full h-full bg-stone-300">
               {/* Replace with <Image /> component once assets are ready */}
               <img 
                src={img.src} 
                alt="Wellness visual" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Central Content */}
      <div>
        <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-8 bg-white">
          <p className="text-base leading-4 text-gray-600 uppercase text-center">I believe in Gentle Healing—treating the root cause of your symptoms, not just the surface.</p>
          <h1 className="mt-10 text-4xl tracking-tighter text-gray-900 sm:text-6xl text-center max-w-xl ">Where tranquility meets wellness</h1>
          <p className="mt-6 text-base leading-6 text-gray-600 max-w-sm text-center">With comprehensive medical training and a commitment to personalized care, I provide targeted homeopathic solutions for both acute and chronic conditions.</p>
          <div className="mt-12 flex items-center">
            <a href="#about" className="justify-center rounded-full gap-3 bg-orange-800 px-7.5 py-4.5 text-base font-semibold text-white">About me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;