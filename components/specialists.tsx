const specialistsData = () => {
    return (
        <div className="bg-stone-200 pb-25 px-5 md:px-0" id="about">
            <div className="flex flex-col md:flex-row mx-auto max-w-full md:max-w-7xl h-150 ">
                <div className="flex flex-col items-center w-full md:max-w-1/2 bg-white p-6 items-center justify-between">
                    <p className="text-base leading-4 text-gray-600 uppercase" >About Kejal Dave</p>
                    <div>
                        <h1 className="mt-10 text-4xl tracking-tighter text-gray-900 sm:text-6xl text-center max-w-2xl ">Expertise You Can Trust</h1>
                        <p className="mt-6 text-base leading-6 text-gray-600 max-w-xl text-center">With comprehensive medical training and a commitment to personalized care, I provide targeted homeopathic solutions for both acute and chronic conditions. <br />
                            Rigorously Trained: Bachelor of Homoeopathic Medicine and Surgery (BHMS), encompassing 5.5 years of intensive study and a 1-year clinical internship in India. <br />
                            Certified Professional: Proudly registered with the New Zealand Council of Homeopaths (NZCH).</p>
                    </div>

                    <div className="mt-12 flex items-center">
                        <a href="#services" className="justify-center rounded-full gap-3 bg-orange-800 px-7.5 py-4.5 text-base font-semibold text-white">Explore Our Services</a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 ">
                    <img src="/potrait.jpg" alt="Specialist Image" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}
export default specialistsData;