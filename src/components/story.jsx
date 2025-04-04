import Image from "next/image";

const Story = () => {
  const timelineItems = [
    {
      year: "1985",
      title: "Welcome to our Hotel LUX.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa.",
    },
    {
      year: "1996",
      title: "Stylish leader of hospitality.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa.",
    },
    {
      year: "2001",
      title: "It is a refuge from home life.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa.",
    },
    {
      year: "2016",
      title: "We look forward to your visit!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa.",
    },
  ];

  return (
    <div className="bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto  px-4 py-8 lg:py-10 ">
        {/* Header Section */}
        <div className="w-full text-center py-8 md:py-12 ">
          <h2 className="text-[80px] md:text-[140px] HerrVon   text-gray-300 ">
            Our Story
          </h2>
          <h1 className="text-4xl md:text-5xl Cormo lg:text-6xl -mt-10 font-serif uppercase mb-3">
            HISTORY BEGINS IN 1985
          </h1>
        </div>

        {/* Image Section */}
        <div className="w-full h-64 md:h-96 lg:h-128 relative overflow-hidden">
          <Image
            src="/stry.jpg"
            alt="Hotel Facade"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Timeline Section */}
        <div className="w-full px-4 py-8 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex flex-col items-start">
                <span className="text-4xl lg:text-5xl font-light text-[#a98868] Cormo">
                  {item.year}
                </span>
                <h3 className="text-lg md:text-xl italic text-gray-500 Cormo  mt-2">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600 dosis">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
