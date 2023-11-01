import React from "react";
const Card = () => {
  return (
    <div className="flex flex-col ">
      <div className="text-xl text-center font-bold md:text-4xl sm:text-2xl text-xl">
        Used by the world's most innovative teams
      </div>
      <div className="flex items-center justify-center flex-col">
        {" "}
        {Array.from({ length: 3 }).map((i,index) => (
          <div key={index} className="md:flex lg:w-[62rem] w-[90%] mx-auto gap-5 mt-16 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 md:p-10 p-5 rounded-xl	">
            <img
              style={{ height: "80px", width: "80px", borderRadius: "100px" }}
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="not found"
            />
            <p className="md:text-xl text-lg leading-8 mt-5 md:mt-[unset]">
              In early product development, we needed a way to easily connect
              our growing IoT product-base to our systems. ZeroTier provided an
              easy, and reliable way to achieve that, and has been growing with
              us.
              <p>ANDREW LIPSCOMB, MECHATRONICS ENGINEER, SWARMFARM ROBOTICS</p>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
function MainCard() {
  return (
    <div>
      <div className="bg-[#262626] w-[90%] mx-auto md:w-full rounded-3xl px-4 my-16 ">
        <div className="md:flex justify-between items-center gap-10 md:px-16 px-5 py-5">
          <img
            className="flex-1 xl:w-full md:w-[300px] w-full"
            alt="Not found"
            src="https://media.istockphoto.com/id/1433012645/photo/businessman-using-smartphone-with-on-vpn-virtual-private-network-security-encrypted.webp?b=1&s=612x612&w=0&k=20&c=IkHdkoyHHdcHHmI8nq7aNfmJ3eFtqnNRJESwLmWuGA8="
          />
          <div className="flex-1">
            <p className="font-bold text-3xl py-4">It just works</p>
            <p className="text-lg">
              ZeroTier combines the capabilities of VPN and SD-WAN, simplifying
              network management. Enjoy flexibility while avoiding costly
              hardware vendor lock in.
            </p>
            <div className="flex flex-row my-8">
              {" "}
              <button className="text-black bg-[#fff] hover:text-[#fff] border border-[#fff] hover:bg-inherit focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between items-center gap-10 md:px-16 px-5 py-5">
          <div>
            <p className="font-bold text-3xl py-4">
              Speed, flexibility, and security
            </p>
            <p className="text-lg">
              Set up ZeroTier in minutes with remote, automated deployment.
            </p>
            <p className="text-lg py-4">
              Emulates Layer 2 Ethernet with multipath, multicast, and bridging
              capabilities.
            </p>
            <p className="text-lg py-4">
              ZeroTier’s zero-trust networking solution provides scalable
              security with 256-bit end-to-end encryption.
            </p>
            <button className="text-black bg-[#fff] hover:text-[#fff] border border-[#fff] hover:bg-inherit focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
              Get ZeroTier
            </button>
          </div>
          <img
            className="flex-1 xl:w-full md:w-[300px] w-full mt-3 md:mt-0"
            alt="Not found"
            src="https://media.istockphoto.com/id/1433012645/photo/businessman-using-smartphone-with-on-vpn-virtual-private-network-security-encrypted.webp?b=1&s=612x612&w=0&k=20&c=IkHdkoyHHdcHHmI8nq7aNfmJ3eFtqnNRJESwLmWuGA8="
          />
        </div>
      </div>
      <Card />
    </div>
  );
}

export default MainCard;
