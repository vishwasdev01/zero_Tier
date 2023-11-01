import React from "react";
import { TiTick } from "react-icons/ti";
import { PiCirclesFour } from "react-icons/pi";
function Pricing() {
  const items = [
    {
      name: "Basic",

      icon: (
        <img
          src="https://www.zerotier.com/static/e92607a0214589a500caf5cae2f11090/b16a9/Zero_Tier_Logo_Inverted_White_73e6fee0b9.webp
      "
          alt="Not Found"
          style={{ width: "50px" }}
        />
      ),

      description: "For Everyone / ZeroTier Hosted Controller",
      content: [
        { name: "1 Admin", icon: <TiTick /> },
        { name: "25 Nodes", icon: <TiTick /> },
        { name: "Unlimited Networks", icon: <TiTick /> },
        { name: "Business SSO: n/a", icon: <PiCirclesFour /> },
        { name: "Community Support", icon: <TiTick /> },
        { name: "Free" },
      ],
      button: "Free Sign up",
      backgroundColor: "#fff",
      className:
        "text-black bg-[#fff] hover:text-[#fff] border-2 border-[#fff] hover:bg-inherit focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800",
    },
    {
      name: "Professional",

      icon: (
        <img
          src="https://www.zerotier.com/static/794e03fb936295d0ab7d53d51d73550b/b16a9/Zero_Tier_Logo_Orange_a60eff7c4a.webp
      "
          alt="Not Found"
          style={{ width: "50px" }}
        />
      ),
      description: "Licensed Only For Individuals and Testing      ",
      content: [
        { name: "Admins | $10 USD/mo each", icon: <TiTick /> },
        { name: "25 Node Packs | $5 USD/mo", icon: <TiTick /> },
        { name: "Unlimited Networks", icon: <TiTick /> },
        { name: "Business SSO | $5 USD/mo per seat", icon: <TiTick /> },
        { name: "Community Support", icon: <TiTick /> },
        { name: "Starting at $5 USD/month" },
      ],
      button: "Sign up",
      backgroundColor: "#ffb441",
      className:
        "text-black bg-[#ffb441] hover:text-[#ffb441] border-2 border-[#ffb441] hover:bg-inherit focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800",
    },
    {
      name: "Business",

      icon: (
        <img
          src="https://www.zerotier.com/static/dccd19c2abf4ded3547eda65dab7d02e/b16a9/Zero_Tier_Logo_Blue_1c2a591633.webp
      "
          alt="Not Found"
          style={{ width: "50px" }}
        />
      ),
      description: "Licensed for Commercial Deployments",
      content: [
        {
          name: "Use Cases Include:",
          icon: null,
          item: ["IoT/IIoT", "SD-WAN", "VPN"],
        },
        { name: "Remote Monitoring and Management", icon: <TiTick /> },
        { name: "Contact Sales for Pricing" },
      ],
      button: "Contact Sales",
      backgroundColor: "#090979",
      className:
        "text-white bg-blue-700 hover:text-white border-2 border-blue-700 hover:bg-inherit focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800",
    },
  ];
  return (
    <div className="mt-24">
      <div className="text-center">
        <h1 className="text-xl text-center font-bold text-4xl">Pricing</h1>
        <h3 className="text-center text-base py-8">
          ZeroTier makes networking easy for everyone - anywhere.
        </h3>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {items.map((item,index) => (
          <div key={index} className="flex gap-5 mt-8 p-6 flex-col items-center bg-[#262626] rounded-3xl">
            <div className="text-3xl">{item.icon}</div>
            <span className="text-3xl font-bold">{item.name}</span>
            <span className="text-base">{item.description}</span>
            {item.content.map((i,index) => (
              <div key={index}>
                <div className={`flex items-center ${i.item && "mb-5"}`}>
                  {i.icon}
                  <div className="">{i.name}</div>
                </div>
                <div className="flex flex-col gap-5">
                  {i.item &&
                    i.item.map((j,index) => (
                      <p key={index} className="flex justify-center">{j}</p>
                    ))}
                </div>
              </div>
            ))}

            <button
              className={item.className}
            >
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
