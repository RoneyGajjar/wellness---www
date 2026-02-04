const statsData = [
  { id: 1, title: "10+", description: "Years Of Exp." },
  { id: 2, title: "500+", description: "Happy Clients" },
  { id: 3, title: "20+", description: "Conditions supported" },
  // { id: 4, title: "$400M", description: "Paid out to creators" },
];


const about = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto px-6">
      <div className="text-center">
        <h2 className="text-5xl mt-10 font-medium text-gray-900" id="about">About me</h2>
        <p className="text-xl mt-5 text-gray-600">I am a qualified homeopath with 10+ years of clinical experience and a passion for helping people feel like themselves again—calmer, clearer, and more comfortable in their own bodies.
          Over this time I have worked with a wide range of clients, from young children to older adults, with simple acute complaints through to complex, long‑standing health challenges.My approach is collaborative and compassionate: we work together as a team, so you feel informed, supported, and confident in each step of your healing journey.I follow professional standards of practice and ethical guidelines, and I am committed to safe, responsible use of homeopathy alongside conventional healthcare when needed.
        </p>
      </div>
      <div className="flex flex-col md:flex-row flex justify-around text-gray-900 mt-10 gap-y-0.5 md:gap-x-0.5 rounded-xl mask-clip-border overflow-hidden">
        {statsData.map((item) => (
          <StatCard
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default about;

const StatCard = ({ title = "Hello", description = "World" }) => (
  <div className="flex flex-col h-32 items-center justify-center bg-gray-50 w-full text-gray-900 md:w-1/4">
    <h6 className="text-3xl font-medium">{title}</h6>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
)

