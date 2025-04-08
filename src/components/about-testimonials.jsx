
const Abouttestimonials = () => {
  const testimonials = [
    {
      name: "Rohit Verma",
      title: "DEVELOPER",
      image: "/t1.jpg",
      quote:
        "The Hotel is simply amazing. The subtle luxury of refined simplicity, uncluttered and unpretentious. Very private and the staff is an attentive and discreet. I recommend it to everyone.",
    },
    {
      name: "Priya Singh",
      title: "DESIGNER",
      image: "/t2.jpg",
      quote:
        "Chilling out on the bed in your hotel room watching television, while wearing your own pajamas, is sometimes the best part of a vacation.",
    },
    {
      name: "Rohan Sharma",
      title: "MODEL",
      image: "/t1.jpg",
      quote:
        "I was welcomed by a unique and attentive staff that has few peers in a city filed with great hotels with exemplary service. Beautiful and very special.",
    },
  ];

  return (
    <section className="w-full bg-[#f9f9f9] py-16 md:py-24 px-4">
         <div className="relative w-full mb-16 text-center">
        <h2 className="relative z-10 text-[40px] Cormo font-normal text-center uppercase md:text-5xl lg:text-6xl">
          TESTIMONIALS
        </h2>
        <span className="absolute top-0 left-0 HerrVon -mt-2 right-0 z-0 text-[100px] font-light text-center text-gray-200 transform -translate-y-1/4 md:text-6xl lg:text-[140px]">
          Client
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center px-6 py-8  md:border-t-0 md:border-l border-gray-200  md:first:border-l-0"
          >
            <h3 className="text-2xl font-light text-[#a98868]">
              {testimonial.name}
            </h3>
            <p className="text-center text-gray-700 italic font-light leading-relaxed">
              {testimonial.quote}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Abouttestimonials;
