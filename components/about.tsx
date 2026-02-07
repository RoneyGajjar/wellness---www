const serviceData = [
    { id: 1, title: "Signature Massage", description: "Relax completely with our Signature Massage, designed to release tension and soothe sore muscles", subhead: "massage", img: "/cardimg1.webp" },
    { id: 2, title: "Revitalizing Facial", description: "Our Revitalizing Facial restores a radiant youthful glow and nourishes your skin with the finest products", subhead: "facial", img: "/cardimg2.webp" },
    { id: 3, title: "Detox Body Scrub", description: "Exfoliate and refresh your skin with our invigorating Detox Body Scrub, leaving it smooth and radiant", subhead: "scrub", img: "/cardimg3.webp" },
];


const Aboutme = () => {
    return (
        <>
            <div className="bg-stone-200">
                <div className="bg-stone-200 px-6 py-12 justify-center items-center flex flex-col">
                    <h1 id="services" className="mt-6 text-4xl tracking-tighter text-gray-900 sm:text-8xl text-center max-w-xl ">Our Services</h1>
                    <p className="mt-6 text-base leading-6 text-gray-600 max-w-sm text-center">Our experienced therapists offer personalized treatments that cater to your individual needs.</p>
                </div>
                <div className="flex flex-col mx-auto max-w-full md:max-w-7xl md:flex-row flex gap-y-6 md:gap-x-4 bg-stone-200 pb-25 px-5 md:px-0">
                    {serviceData.map((item) => (
                        <ServiceCard2
                            key={item.id}
                            btn="Learn More"
                            subhead={item.subhead}
                            title={item.title}
                            description={item.description}
                            img={item.img}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Aboutme;


const ServiceCard2 = ({ title = "Hello", description = "World", btn = "Learn More", subhead = "Subhead", img = "img" }) => (
    <div className="relative h-120 w-full overflow-hidden">
        <div
            className="absolute inset-0  brightness-50 bg-cover bg-center"
            style={{ filter: '', backgroundImage: `url(${img})` }}
        />
        <div className="relative z-10 flex flex-col items-center justify-between h-full text-white p-8">
            <p className="text-base leading-4 uppercase">{subhead}</p>
            <div>
                <h1 className="mt-10 text-2xl tracking-tighter sm:text-4xl text-center max-w-xl place-content-center">{title}</h1>
                <p className="mt-6 text-base leading-6  max-w-xs text-center">{description}</p>
            </div>
            <a href="#services" className="rounded-full gap-3 bg-white px-7.5 py-4.5 text-base font-semibold text-gray-900">{btn}</a>
        </div>
    </div>

)
