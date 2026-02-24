const contact = () => {
    return (
        <div className="relative h-120 w-full overflow-hidden h-150 md:h-120">
            <div
                className="absolute inset-0 bg-[url('/contact1.jpg')] brightness-50 bg-cover bg-center"
                style={{ filter: '' }}
            />
            <div className="relative z-10 flex flex-col items-center justify-between h-full text-white p-8">
                <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-8">
                    <h1 id="contact" className=" text-4xl tracking-tighter sm:text-6xl text-center max-w-2xl place-content-center">Kejal Dave | Homeopathic Consultant</h1>
                    <p className="mt-3 text-sm leading-6  max-w-md text-center">Consultation Hours (By Appointment Only): <br />
                        Monday – Friday: 9:00 AM – 6:00 PM <br />
                        Saturday – Sunday: 9:00 AM – 3:00 PM <br />
                        Location: 4/110 Royal Road, Massey, Auckland 0614,
                        Phone/Mobile: 027 770 1719,
                        Email: kejal1719@gmail.com
                    </p>
                </div>
                <a href="#contact" className="rounded-full gap-3 bg-white px-7.5 py-4.5 text-base font-semibold text-gray-800">Contact Us</a>
            </div>
        </div>
    )
}
export default contact; 