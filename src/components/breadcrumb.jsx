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
      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wider text-center mb-auto mt-auto">
        {title}
      </h1>

      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-center mb-8 md:mb-12">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2 md:space-x-3">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <li className="flex items-center">
                    <span className="text-[#d4af37] mx-1 md:mx-2 text-lg">
                      •
                    </span>
                  </li>
                )}
                <li className="inline-flex items-center">
                  {index === items.length - 1 ? (
                    <span className="text-[#d4af37] text-sm md:text-base uppercase font-light">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-[#d4af37] hover:text-white text-sm md:text-base uppercase font-light transition-colors duration-200"
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
