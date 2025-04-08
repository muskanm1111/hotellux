import Image from "next/image";

const Story = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl HerrVon lg:text-7xl text-gray-400">
            Experience Luxury
          </h2>
          <h3 className="text-3xl md:text-4xl Cormo lg:text-5xl  mt-2">
            UNFORGETTABLE MOMENTS AWAIT
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row mx-auto max-w-7xl gap-8 items-center">
        
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

          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {/*  1 */}
              <div className="bg-white p-8  shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-[1.7rem] Cormo font-light text-amber-700">
                  Luxurious Stays
                </h3>
                <h4 className="text-lg italic text-gray-600 mb-2 Cormo">
                  Premium Suites & Rooms
                </h4>
                <p className="text-gray-700 text-base dosis">
                  Immerse yourself in our meticulously designed rooms featuring
                  premium bedding, smart controls, and stunning city views.
                </p>
              </div>

              {/*  2 */}
              <div className="bg-white p-8  shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-[1.7rem] font-light Cormo text-amber-700">
                  Fine Dining
                </h3>
                <h4 className="text-lg italic  text-gray-600 Cormo mb-2">
                  Culinary Excellence
                </h4>
                <p className="text-gray-700 text-base dosis">
                  Savor extraordinary flavors at our signature restaurants with
                  international cuisine and local delicacies.
                </p>
              </div>

              {/*  3 */}
              <div className="bg-white p-8 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-[1.7rem] Cormo font-light text-amber-700">
                  Wellness & Spa
                </h3>
                <h4 className="text-lg italic text-gray-600 mb-2 Cormo">
                  Rejuvenate Your Senses
                </h4>
                <p className="text-gray-700 text-base dosis">
                  Discover tranquility in our world-class spa featuring
                  therapeutic treatments and modern fitness center.
                </p>
              </div>

              {/*  4 (New) */}
              <div className="bg-white p-8  shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-[1.7rem] Cormo font-light text-amber-700">
                  Events & Celebrations
                </h3>
                <h4 className="text-lg italic text-gray-600 mb-2 Cormo">
                  Memorable Occasions
                </h4>
                <p className="text-gray-700 text-base dosis">
                  Host spectacular events in our elegant venues with
                  professional planning services and custom catering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;