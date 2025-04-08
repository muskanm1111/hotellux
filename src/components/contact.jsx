import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="w-full py-16 md:py-20 px-4">
      <div className="w-full text-center mb-16">
        <h2 className="text-[80px] md:text-5xl lg:text-[140px] HerrVon  text-gray-300 ">
          Connect
        </h2>
        <h2 className="text-4xl md:text-5xl Cormo lg:text-[60px]  uppercase -mt-16">
          GET IN TOUCH
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="flex flex-col">
        


          <div className="md:w-[400px] md:h-60 overflow-x-hidden bg-gray-100 flex flex-col items-center justify-center mb-8">
            <div className="text-gray-500 mb-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.234350710503!2d77.04311527461583!3d28.592745575686518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bd8f405bcf1%3A0x9e601372145832d0!2sDesire%20Div%20-%20Website%20Designing%20Company%20in%20Dwarka!5e0!3m2!1sen!2sin!4v1743748134111!5m2!1sen!2sin"
                width="400"
                height="240"
                referRepolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact  */}
          <div className="px-4">
            <h3 className="text-2xl Cormo font-light text-gray-700 italic mb-6">
              Our contacts
            </h3>

            <div className="space-y-4 dosis">
            
              <div className="flex items-start  max-w-sm ">
                <MapPin className="h-5 w-5 text-[#b99470] mt-1 mr-3" />
                <p className="text-gray-600 text-wrap">
                  T-16, Pocket-5, Plot no-6, Malik Builcon, Commercial Plaza
                  Dwarka Sector-12, New Delhi, 110075
                </p>
              </div>

          
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-[#b99470] mt-1 mr-3" />
                <p className="text-gray-600">hello@desirediv.com</p>
              </div>
             

             
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-[#b99470] mt-1 mr-3" />
                <p className="text-gray-600">Call Us: 1-800-123-1234</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <form className="space-y-6">
          
            <div>
              <label
                htmlFor="name"
                className="block text-[18px]  dosis text-gray-500 mb-1"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b99470] focus:border-transparent"
                required
              />
            </div>

             <div>
              <label
                htmlFor="email"
                className="block text-[18px]  dosis text-gray-500 mb-1"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b99470] focus:border-transparent"
                required
              />
            </div>

         
            <div>
              <label
                htmlFor="message"
                className="block text-[18px]  dosis text-gray-500 mb-1"
              >
                Your message (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b99470] focus:border-transparent"
              ></textarea>
            </div>

         
            <div>
              <button
                type="submit"
                className="w-32 bg-[#b99470] hover:bg-black text-white py-2 px-4 transition duration-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
