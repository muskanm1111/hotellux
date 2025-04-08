import React from "react";
import Link from "next/link";

/**
 * Reusable Breadcrumb component
 * @param {Object} props
 * @param {string} props.title - The main title to display
 * @param {Array} props.items - Array of breadcrumb items [{label: 'Home', href: '/'}, {label: 'Story of Hotel Lux', href: '/story'}]
 * @param {string} props.backgroundImage - URL of the background image
 * @param {string} props.className - Additional classes to apply to the container
 */
const Breadcrumb = ({
  title,
  items = [
    { label: "Home", href: "/" },
    { label: "Story of Hotel Lux", href: "/story" }
  ],
  backgroundImage = "/b.jpg",
  className = "",
}) => {
  return (
    <div
      className={`relative w-full h-[400px] md:h-[500px] flex flex-col justify-center items-center ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
  
      <h1 className="text-4xl Cormo uppercase md:text-5xl lg:text-[50px] text-white  tracking-wider text-center mb-auto mt-auto">
        {title}
      </h1>

    
      <div className="flex items-center justify-center mb-8 md:mb-12">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center dosis  space-x-2 md:space-x-3">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <li className="flex items-center">
                    <span className="text-white mx-1 md:mx-2 text-[16px] md:text-[20px]">
                      /
                    </span>
                  </li>
                )}
                <li className="inline-flex items-center">
                  {index === items.length - 1 ? (
                    <span className="text-white text-[10px] md:text-[16px] uppercase ">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white text-[10px] md:text-[16px]  uppercase font-light transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
