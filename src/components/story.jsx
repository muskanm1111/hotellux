import Image from "next/image";

const Story = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl HerrVon lg:text-7xl text-gray-400">
            Experience Luxury
          </h2>
          <h3 className="text-3xl md:text-4xl Cormo lg:text-5xl mt-2">
            UNFORGETTABLE MOMENTS AWAIT
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row mx-auto max-w-7xl gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-72 md:h-96 lg:h-[500px]">
              <Image
                src="/s2.jpg"
                alt="Hotel LUX Luxury Suite"
                fill
                className="object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="lg:w-1/2 space-y-12">
            <div className="border-l-2 border-amber-700 pl-6">
              <h3 className="text-4xl md:text-5xl Cormo font-light text-amber-700">
                Luxurious Stays
              </h3>
              <h4 className="text-lg italic text-gray-600 Cormo">
                Premium Suites & Rooms
              </h4>
              <p className="text-gray-700 text-base dosis mt-2 leading-relaxed">
                Immerse yourself in our meticulously designed rooms featuring
                premium bedding, smart controls, and stunning city views. Each
                suite is a sanctuary of comfort and elegance, thoughtfully
                appointed with luxurious amenities and sophisticated décor. From
                our spacious Deluxe Rooms to our opulent Presidential Suite,
                every space is crafted to provide an exceptional stay. Enjoy
                plush Egyptian cotton linens, marble bathrooms with rainfall
                showers, state-of-the-art entertainment systems, and
                personalized concierge service available at the touch of a
                button. Our rooms seamlessly blend timeless elegance with modern
                convenience to create an unforgettable retreat in the heart of
                the city.Our culinary journey begins at La Terrasse, our
                Michelin-starred restaurant where celebrated Chef Renaud Martin
                creates innovative dishes that celebrate seasonal ingredients
                sourced from local artisans and our own organic garden.For a
                more casual experience, visit Azure Lounge for handcrafted
                cocktails and tapas with panoramic city views. Our legendary
                Sunday Brunch at The Grand Room has become a beloved tradition,
                featuring live cooking stations, a champagne bar, and decadent
                desserts. For an intimate dining experience, our private Chef&apos;s
                Table offers a customized tasting menu with wine pairings
                curated by our master sommelier from our extensive cellar
                housing over 3,000 bottles from renowned vineyards around the
                world.
              </p>
            </div>

          

        
            </div> 
          </div>
        </div>
    
    </section>
  );
};

export default Story;
