const contact = () => {
    return (
        <div className="relative h-120 w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-[url('/contact1.jpg')] brightness-50 bg-cover bg-center"
                style={{ filter: '' }}
            />
            <div className="relative z-10 flex flex-col items-center justify-between h-full text-white p-8">
                <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-8">
                    <h1 id="contact" className="mt-10 text-4xl tracking-tighter sm:text-6xl text-center max-w-2xl place-content-center">Refresh your spirit with our signature spa rituals</h1>
                    <p className="mt-3 text-base leading-6  max-w-md text-center">Rediscover harmony of body and mind with treatments designed to refresh, restore, and deeply relax.</p>
                </div>
                <a href="#contact" className="rounded-full gap-3 bg-white px-7.5 py-4.5 text-base font-semibold text-gray-800">Contact Us</a>
            </div>
        </div>
    )
}
export default contact; 