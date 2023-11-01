import React from "react";

function Card() {
  const items = [
    {
      image:
        "https://www.zerotier.com/static/c079e7ff52368ba0a4fad799a1af1192/1e526/Sales_Graphs_Art_dc7e900aa6.webp",
      name: "ZeroTier Enterprise",

      description:
        "For high-volume VPN, IoT, IIoT, edge, embedded networking, multi & hybrid cloud, Infrastructure as Code (IaC), and Commercial Use.",
      button: "Contact Sales",
      renderHtml: (
        <div className="lg:flex gap-10">
          <div className="lg:w-[32rem] flex flex-col justify-center leading-6 p-3 lg:p-0">
            <h1 className="text-3xl font-bold py-5">ZeroTier Enterprise</h1>
            <p className="text-xl">
              For high-volume VPN, IoT, IIoT, edge, embedded networking, multi &
              hybrid cloud, Infrastructure as Code (IaC), and Commercial Use.
            </p>

            <button
              type="button"
              className="w-fit p-3 my-2 text-[#ffb441] bg-inherit hover:text-black border-2 border-[#ffb441] hover:bg-[#ffb441] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Contact Sales
            </button>
          </div>
          <img
            src={
              "https://www.zerotier.com/static/c079e7ff52368ba0a4fad799a1af1192/1e526/Sales_Graphs_Art_dc7e900aa6.webp"
            }
            alt="not found"
            style={{ width: "400px", borderRadius: "30px" }}
          />
        </div>
      ),
    },
    {
      image:
        "https://www.zerotier.com/static/c079e7ff52368ba0a4fad799a1af1192/1e526/Sales_Graphs_Art_dc7e900aa6.webp",

      name: "Service Providers",
      description:
        "For hardware and software companies interested in embedding or integrating the ZeroTier platform within their service offering, as well as enterprise-facing channels including Managed Service Providers (MSPs), Resellers, and Systems Integrators.",
      button: "Contact SP Sales",
      renderHtml: (
        <div className="lg:flex gap-10">
          <img
            src={
              "https://www.zerotier.com/static/c079e7ff52368ba0a4fad799a1af1192/1e526/Sales_Graphs_Art_dc7e900aa6.webp"
            }
            alt="not found"
            style={{ width: "400px", borderRadius: "30px" }}
          />
          <div className="lg:w-[32rem] flex flex-col justify-center leading-6 p-3 lg:p-0">
            <h1 className="text-3xl font-bold py-5">Service Providers</h1>
            <p className="text-xl">
              For hardware and software companies interested in embedding or
              integrating the ZeroTier platform within their service offering,
              as well as enterprise-facing channels including Managed Service
              Providers (MSPs), Resellers, and Systems Integrators.
            </p>
            <button
              type="button"
              className="w-fit p-3 my-2 text-[#ffb441] bg-inherit hover:text-black border-2 border-[#ffb441] hover:bg-[#ffb441] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Contact SP Sales
            </button>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="mt-10">
      {items.map((item,index) => (
        <div key={index} className="bg-[#4436ca] rounded-3xl mt-10 flex items-center justify-center w-[90%] mx-auto">
          {item.renderHtml}
        </div>
      ))}
      <div className="bg-[#262626] rounded-3xl mt-10 p-8 w-[90%] mx-auto">
        <h1 className="text-2xl font-bold">Open Source Community Edition</h1>
        <p className="text-xl py-2">
          Featuring unlimited nodes, networks, and admins. Self-hosted. Designed
          for non-Commercial Use cases.
        </p>
        <div className="flex gap-7">
          <button
            type="button"
            className="p-3 my-2 text-white bg-inherit hover:text-black border-2 border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            ZeroTier Github
          </button>
          <button className="hover:text-[#ffb441]">Read Documentation</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
