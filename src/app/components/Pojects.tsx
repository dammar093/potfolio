import React from "react";
import mart from "../public/admin.png";
import collge from "../public/college.png";
import ecommerce from "../public/ecommerce.png";
import admin from "../public/admin.png";
import Image from "next/image";
const Pojects = () => {
  const data = [
    {
      id: 0,
      title: "eCommerce",
      desc: "link This is a fully fucntional ecommerce project. Technology used in this project ReactJs, Css, Node.js, Express.js, Mongodb, Cloudinary, React Router Dom, and Reduxtollkit",
      link: "https://github.com/dammar093/ecommerce",
      coverImage: mart
    },
    {
      id: 1,
      title: "eCommerce",
      desc: "link This is an eCommerce UI based project. Technology used in this project ReactJs, Css, React Router Dom, and Reduxtollkit",
      link: "https://dyams-shop.vercel.app/",
      coverImage: ecommerce
    },
    {
      id: 2,
      title: "Admin Dashboard",
      desc: "link This is an Admin dashboard UI based project. Technology used in this project ReactJs, Taiwind, React Router Dom, and Reduxtollkit",
      link: "https://admin-dashboard-nu-plum.vercel.app/",
      coverImage: admin
    },
    {
      id: 3,
      title: "College Website",
      desc: "link This is a College website UI based project. Technology used in this project HTML, Css, JavaScript and Bootsrap",
      link: "https://dammar093.github.io/jmc3.0/",
      coverImage: collge
    }
  ];

  return (
    <div className="w-full mt-10">
      <h2 className="text-3xl font-semibold text-center">Latest Pojects</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-6">
        {data.map((prj) => {
          return (
            <div
              className="w-full md:w-[23vw]  h-fit p-4 bg-slate-800 rounded-md"
              key={prj.id}
            >
              <div>
                <Image src={prj.coverImage} alt="project" />
              </div>
              <div>
                <h3 className="text-md font-medium text-blue-300 mt-2">
                  {prj.title}
                </h3>
              </div>
              <div className="text-justify text-sm">{prj.desc}</div>
              <div>
                <a
                  className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 px-6 py-1 rounded-sm"
                  href={prj.link}
                >
                  Link
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pojects;
