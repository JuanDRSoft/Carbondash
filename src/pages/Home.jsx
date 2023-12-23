import React from "react";
import image from "../../public/Image_Placeholder.jpg";

const Home = () => {
  return (
    <div>
      <div className="bg-slate-100 h-[70vh] flex justify-center items-center">
        <div className="lg:w-[40%] w-[50%]">
          <h1 className="text-center font-bold text-blue-950 text-5xl mb-10">
            This Headline Grabs Visitors’ Attention
          </h1>

          <p className="text-center text-xl mb-10">
            A short description of your business
          </p>

          <div className="flex justify-center">
            <button className="rounded-full bg-blue-500 px-10 p-3 font-semibold text-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-10">
        <h1 className="text-center font-bold text-3xl">Our Services</h1>
        <p className="text-center mt-3 mb-10">
          This text briefly introduces your main services to your visitors.
        </p>

        <div className="grid lg:grid-cols-4  grid-cols-2 px-36 gap-10">
          <div>
            <img src={image} />
            <h1 className="font-bold mt-5 text-xl mb-3">Service 1</h1>
            <p>
              A short description of the service and how the visitor will
              benefit from it.
            </p>
          </div>

          <div>
            <img src={image} />
            <h1 className="font-bold mt-5 text-xl mb-3">Service 2</h1>
            <p>
              A short description of the service and how the visitor will
              benefit from it.
            </p>
          </div>

          <div>
            <img src={image} />
            <h1 className="font-bold mt-5 text-xl mb-3">Service 3</h1>
            <p>
              A short description of the service and how the visitor will
              benefit from it.
            </p>
          </div>

          <div>
            <img src={image} />
            <h1 className="font-bold mt-5 text-xl mb-3">Service 4</h1>
            <p>
              A short description of the service and how the visitor will
              benefit from it.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-28">
          <button className="bg-blue-500 text-white px-16 rounded-full p-3">
            View All Services
          </button>
        </div>
      </div>

      <div className="pt-20 pb-20">
        <h1 className="text-3xl font-bold text-center">Why Choose Us</h1>

        <div className="grid lg:grid-cols-4 grid-cols-2 px-10 mt-20 gap-10">
          <div className="grid justify-center bg-slate-100 p-20 gap-3">
            <h1 className="text-3xl font-bold text-center">Benefit 1</h1>
            <div className="flex justify-center">
              <hr className="w-20 h-1 border-none bg-gray-300" />
            </div>
            <p>A short description of the benefit.</p>
          </div>

          <div className="grid justify-center bg-slate-100 p-20 gap-3">
            <h1 className="text-3xl font-bold text-center">Benefit 2</h1>
            <div className="flex justify-center">
              <hr className="w-20 h-1 border-none bg-gray-300" />
            </div>
            <p>A short description of the benefit.</p>
          </div>

          <div className="grid justify-center bg-slate-100 p-20 gap-3">
            <h1 className="text-3xl font-bold text-center">Benefit 3</h1>
            <div className="flex justify-center">
              <hr className="w-20 h-1 border-none bg-gray-300" />
            </div>
            <p>A short description of the benefit.</p>
          </div>

          <div className="grid justify-center bg-slate-100 p-20 gap-3">
            <h1 className="text-3xl font-bold text-center">Benefit 4</h1>
            <div className="flex justify-center">
              <hr className="w-20 h-1 border-none bg-gray-300" />
            </div>
            <p>A short description of the benefit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
