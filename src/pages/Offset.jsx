import React from "react";
import image from "../../public/Image_Placeholder.jpg";

const Offset = () => {
  return (
    <div>
      <div className="pt-10 pb-10">
        <h1 className="text-center font-bold text-5xl">Carbon Offsets</h1>
        <p className="text-center mt-3 mb-10 px-36">
          Carbondash offers a range of offset projects that have been rigorously
          vetted using our C8 Carbon Credit Assessment Framework
        </p>

        <div className="grid lg:grid-cols-4  grid-cols-2 px-36 gap-10">
          <div>
            <img src={image} />
            <h1 className="font-bold mt-5 text-xl mb-3">Malaysia</h1>
            <p>
              A short description of the service and how the visitor will
              benefit from it.
            </p>
          </div>

          <div>
            <img src={image} />
            <h1 className="font-bold mt-5 text-xl mb-3">Philippines</h1>
            <p>
              A short description of the service and how the visitor will
              benefit from it.
            </p>
          </div>

          <div>
            <img src={image} />
            <h1 className="font-bold mt-5 text-xl mb-3">India</h1>
            <p>
              A short description of the service and how the visitor will
              benefit from it.
            </p>
          </div>

          <div>
            <img src={image} />
            <h1 className="font-bold mt-5 text-xl mb-3">Australia</h1>
            <p>
              A short description of the service and how the visitor will
              benefit from it.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-28">
          <button className="bg-blue-500 text-white px-16 rounded-full p-3">
            View More Offset Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offset;
