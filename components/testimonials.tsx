const testimonialData = [
    {id: 1, name: "— Emily R. , Massey", feedback: "Kejal's home visit was a lifesaver for my sick daughter. Her gentle approach and quick acute care brought relief within days. The $50 consultation is the best investment for our family's health.", img: "/testimg1.webp"},
    {id:2, name: "— Veronica M. , Online Service", feedback: "After years of struggling with a chronic condition, Kejal's in-depth online consultation changed everything. Her expertise provided a tailored plan for long-term, gentle healing right from my living room.", img: "/testimg2.webp"},
    {id:3, name: "— Darrel S. , Auckland", feedback: "Kejal’s extensive background and NZCH registration put me at ease immediately. She takes the time to explain the homeopathic process, never rushes follow-ups, and offers completely transparent pricing.", img: "/testimg3.webp"}

];



const testimonials = () => {
    return (
        <div className ="bg-stone-200 pb-25 px-5 md:px-0">
            <div className="mx-auto max-w-7xl pt-120 md:pt-0">
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