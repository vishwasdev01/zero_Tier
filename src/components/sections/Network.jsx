import React from "react";

function Network() {
  const items = [
    {
      name: "Individuals",
      icon: <img src="https://www.zerotier.com/static/8a85fc56f42df4c757170636612573f4/1e526/game_icon_eba3d81511.webp" alt="Not Found" style={{width:'150px'}}/>,
      description:
        "Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere",
      description2:
        "Conveniently share files and data, or even play LAN games with others",
      description3: "Manage secure network access to users of choice",
    },
    {
      name: "IT Teams",
      icon: <img src="https://www.zerotier.com/static/a24340474cb83819c6d6a0f2a5c8b481/1e526/Cloud_Icon_3a0e68dbd5.webp" alt="Not Found" style={{width:'150px'}}/>,
      description:
        "Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere",
      description2:
        "Conveniently share files and data, or even play LAN games with others",
      description3: "Manage secure network access to users of choice",
    },
    {
      name: "DevOps",
      icon: <img src="https://www.zerotier.com/static/9805ec01fae783e135a667da3294ca30/1e526/Dev_Ops_Icon_007d67a039.webp" alt="Not Found" style={{width:'150px'}}/>,
      description:
        "Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere",
      description2:
        "Conveniently share files and data, or even play LAN games with others",
      description3: "Manage secure network access to users of choice",
    },
    {
      name: "Embedded",
      icon: <img src="https://www.zerotier.com/static/1dd3895e75e865b9ea36aa98fb36dba5/1e526/Global_Network_Icon_e85c3eca3d.webp" alt="Not Found" style={{width:'150px'}}/>,

      description:
        "Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere",
      description2:
        "Conveniently share files and data, or even play LAN games with others",
      description3: "Manage secure network access to users of choice",
    },
  ];
  return (
    <div className="text-center mt-20 max-w-7xl mx-auto">
      <h1 className="text-xl text-center font-bold text-4xl">Secure networks for teams of any size</h1>
      <div className="flex flex-wrap justify-center gap-16">
        {items.map((item,index) => (
          <div key={index} className="flex gap-2 mt-10 flex-col items-center">
            <div className="rounded-xl" >{item.icon}</div>
            <div className="text-lg font-bold">{item.name}</div>
            <span className="text-lg leading-8 md:w-64 w-full px-3 md:px-[unset]">{item.description}</span>
            <span className="md:w-52 text-lg leading-8 px-3 md:px-[unset]">{item.description2}</span>
            <span className="md:w-48 text-lg leading-8 px-3 md:px-[unset]">{item.description3}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Network;
