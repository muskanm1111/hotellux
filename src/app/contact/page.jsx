import Breadcrumb from "@/components/breadcrumb";
import Contact from "@/components/contact";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrumb title="Contacts" href="/" />
      <Contact />
    </div>
  );
};

export default page;
