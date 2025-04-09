import Image from "next/image";
import Activities from "./Activities";

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

        {/* Welcome Section */}
        <div className="flex flex-col lg:flex-row mx-auto max-w-7xl gap-12 items-center mb-20">
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

          <div className="lg:w-1/2 space-y-6">
            <div className="border-l-2 border-amber-700 pl-6">
              <h3 className="text-4xl md:text-5xl Cormo font-light text-amber-700">
                Welcome to Naaz Stay
              </h3>
              <h4 className="text-lg italic text-gray-600 Cormo">
                Your Cozy Retreat by Nigeen Lake
              </h4>
              <p className="text-gray-700 text-base dosis mt-4 leading-relaxed">
                Nestled right on the serene banks of Nigeen Lake, Naaz Stay
                offers an intimate and charming escape into the heart of
                Kashmir. Our homestay is a unique, small property that promises
                comfort, warmth, and an authentic local experience – just steps
                away from the peaceful waters.
              </p>
              <p className="text-gray-700 text-base dosis mt-4 leading-relaxed">
                Each of our tastefully designed rooms comes with attached
                bathrooms and is adorned with traditional Kashmiri décor,
                blending elegance with cultural richness. Whether you&apos;re sipping
                Kahwa by the window or relaxing after a day of exploring, you&apos;ll
                feel right at home.
              </p>
              <p className="text-gray-700 text-base dosis mt-4 leading-relaxed">
                The highlight? Our rooftop restaurant – the perfect spot to
                unwind with a hot cup of tea while soaking in breathtaking views
                of Nigeen Lake and the majestic mountains that frame it.
              </p>
              <p className="text-gray-700 text-base dosis mt-4 leading-relaxed">
                Whether you&apos;re a solo traveler, a couple, or a small group of
                friends, Naaz Stay is your cozy base to experience the beauty,
                tranquility, and warmth of Kashmir.
              </p>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl Cormo font-light text-amber-700">
              ABOUT US
            </h3>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <p className="text-gray-700 text-base dosis leading-relaxed mb-4">
              Naaz Stay is not just a place to stay – it&apos;s an experience of true
              Kashmiri hospitality. Nestled right on the banks of the serene
              Nigeen Lake, our homestay is designed to make you feel at home
              while immersing you in the warmth, culture, and charm of Kashmir.
            </p>
            <p className="text-gray-700 text-base dosis leading-relaxed mb-4">
              At Naaz Stay, our concept is simple: to offer you an authentic and
              heartfelt experience of Kashmiri living. From the moment you
              arrive, you&apos;ll feel the difference – not just in the service, but
              in the soul of the space itself.
            </p>
            <p className="text-gray-700 text-base dosis leading-relaxed mb-4">
              Our rooms are thoughtfully designed with traditional Kashmiri
              craftsmanship, featuring woodwork, intricate patterns, and locally
              inspired decor – all beautifully blended with modern comforts and
              amenities. Each room comes with an attached bathroom and cozy
              interiors that reflect the elegance and heritage of the region.
            </p>
            <p className="text-gray-700 text-base dosis leading-relaxed">
              Head up to our rooftop restaurant and take in the breathtaking
              views of Nigeen Lake and the surrounding mountains – a perfect
              spot to relax and take in the magic of Kashmir.
            </p>
            <p className="text-gray-700 text-base dosis leading-relaxed mt-4">
              Whether you&apos;re here to unwind, explore, or just experience
              something different, Naaz Stay welcomes you with open arms and the
              warmth of true Kashmiri hospitality.
            </p>
          </div>
        </div>

        {/* Include the Activities component */}
        <Activities />
      </div>
    </section>
  );
};

export default Story;
