import React from "react";

const Breadcrumb = ({
  title,
  backgroundImage = "/os2.jpeg",
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
    </div>
  );
};

export default Breadcrumb;
