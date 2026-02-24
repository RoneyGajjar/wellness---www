const Parallax = () => {
    return (
        <div className="relative h-screen overflow-hidden bg-gray-900">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/heroimg1.jpg')" }}>
            </div>
            
        </div>

    )
}
export default Parallax;