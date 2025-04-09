import Image from "next/image";

const Story = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl HerrVon lg:text-7xl text-gray-400">
            Experience Kashmir
          </h2>
          <h3 className="text-3xl md:text-4xl Cormo lg:text-5xl mt-2">
            AUTHENTIC HOMESTAY BY NIGEEN LAKE
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row mx-auto max-w-7xl gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-72 md:h-96 lg:h-[500px]">
              <Image
                src="/s2.jpg"
                alt="Naaz Stay Lake View"
                fill
                className="object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="lg:w-1/2 space-y-12">
            <div className="border-l-2 border-amber-700 pl-6">
              <h3 className="text-4xl md:text-5xl Cormo font-light text-amber-700">
                Traditional Hospitality
              </h3>
              <h4 className="text-lg italic text-gray-600 Cormo">
                Authentic Kashmiri Experience
              </h4>
              <p className="text-gray-700 text-base dosis mt-2 leading-relaxed">
                Welcome to Naaz Stay, where every moment is crafted to give you
                an authentic taste of Kashmir. Our homestay, nestled by the
                serene Nigeen Lake, offers a perfect blend of traditional
                Kashmiri architecture and modern comfort. Each room is
                thoughtfully designed with local craftsmanship, featuring
                intricate woodwork, handwoven carpets, and traditional motifs
                that tell the story of our rich cultural heritage. Start your
                day with the aroma of freshly brewed Kahwa, our traditional
                green tea, served with local honey and almonds. Our rooftop
                restaurant, overlooking the majestic Dal Lake and surrounding
                mountains, serves authentic Kashmiri cuisine prepared with
                locally sourced ingredients. From the famous Wazwan feast to our
                signature Rogan Josh, every dish is a celebration of our
                culinary traditions. Experience the warmth of Kashmiri
                hospitality as our staff, many of whom are local residents,
                share stories of our culture and traditions. Whether you&apos;re
                enjoying a peaceful evening by the lake, exploring the nearby
                Mughal gardens, or simply relaxing in our cozy rooms, every
                moment at Naaz Stay is designed to create lasting memories of
                your Kashmir journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
