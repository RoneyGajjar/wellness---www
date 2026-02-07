const testimonialData = [
    {id: 1, name: "— Emily R.", feedback: "The best spa experience I've ever had! The Signature Massage was so relaxing, and the staff made me feel completely at ease. I left feeling completely rejuvenated!", img: "/testimg1.webp"},
    {id:2, name: "— Veronica M.", feedback: "A true haven of tranquility. The Revitalizing Facial left my skin glowing, and I felt like a new person afterward. Highly recommend this place!", img: "/testimg2.webp"},
    {id:3, name: "— Darrel S.", feedback: "I've been to many spas, but the level of care and expertise here is unmatched. The Detox Body Scrub was incredible, and I’ll definitely be returning!", img: "/testimg3.webp"}

];



const testimonials = () => {
    return (
        <div className ="bg-stone-200 pb-25 px-5 md:px-0">
            <div className="mx-auto max-w-7xl ">
                <p className="text-sm md:text-base leading-4 text-gray-600 uppercase">Testimonials</p>
                <h1 className="mt-8 text-4xl tracking-tighter text-gray-900 sm:text-6xl ">What our clients are saying</h1>
            </div>
            <div>
                <div className="mx-auto max-w-7xl mt-10 ">
                    {testimonialData.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            name={testimonial.name}
                            feedback={testimonial.feedback}
                            img={testimonial.img}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default testimonials;



const TestimonialCard = ({ name = "Client Name", feedback = "This is a testimonial.", img = "No_Img" }) => (
    <div className="flex flex-col md:flex-row border border-gray-300 p-2.5">
        <img src={img} alt="img" className="w-100 h-64 object-cover" />
        <div className="flex flex-col items-start justify-between  py-14 lg:px-8">
            <p className="text-gray-600 text-lg md:text-2xl max-w-2xl">{feedback}</p>
            <h3 className="text-base md:text-lg font-semibold">{name}</h3>
        </div>
    </div>
);