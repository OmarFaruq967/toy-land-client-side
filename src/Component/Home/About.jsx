import React from "react";

const About = () => {
  return (
    <div>
      <div className=" bg-[#f5f6f7] pt-20 text-center">
        <h4 className="text-xl pb-8 "> About us</h4>
        <h2 className="text-4xl font-bold">
          We make your children happier <br />
          with the best toys
        </h2>
      </div>
      <div className=" bg-[#f5f6f7] pt-16 pb-16 grid lg:grid-cols-4 mx-0 lg:px-28  justify-center ">
        {/* Card-1 */}
        <div className="card w-64 bg-slate-50 shadow-xl mb-6">
          <figure className="">
            <img
              src="https://i.ibb.co/R06hMh1/Big-store.png"
              alt="Shoes"
              className="rounded-xl h-[150px] pt-5"
            />
          </figure>
          <div className="items-center text-center pt-5">
            <h2 className="text-xl font-bold text-center">Big Selection</h2>
            <p>The widest toy range.</p>
            <div className="pt-5">
              <button className="btn btn-sm bg-[#570df8]">Buy Now</button>
            </div>
          </div>
        </div>

        {/* card-2 */}

        <div className="card w-64 bg-slate-50 shadow-xl mb-6">
          <figure className="">
            <img
              src="https://i.ibb.co/znF1dq7/Online-store.png"
              alt="Shoes"
              className="rounded-xl h-[150px] pt-5"
            />
          </figure>
          <div className="items-center text-center pt-5 mb-6">
            <h2 className="text-xl font-bold text-center">Online Store</h2>
            <p>Easiest online shopping.</p>
            <div className="pt-5">
              <button className="btn btn-sm bg-[#570df8]">Buy Now</button>
            </div>
          </div>
        </div>

        {/* card-3 */}

        <div className="card w-64 bg-slate-50 shadow-xl mb-6">
          <figure className="">
            <img
              src="https://i.ibb.co/0YN4rsx/Delevary.png"
              alt="Shoes"
              className="rounded-xl h-[150px] pt-5"
            />
          </figure>
          <div className="items-center text-center pt-5">
            <h2 className="text-xl font-bold text-center">Delivery</h2>
            <p>Fast and easy delivery.</p>
            <div className="pt-5">
              <button className="btn btn-sm bg-[#570df8]">Buy Now</button>
            </div>
          </div>
        </div>

        {/* card-4 */}

        <div className="card w-64 bg-slate-50 shadow-xl mb-6">
          <figure className="">
            <img
              src="https://i.ibb.co/kqRyfKT/Support.png"
              alt="Shoes"
              className="rounded-xl h-[150px] pt-5"
            />
          </figure>
          <div className="items-center text-center pt-5">
            <h2 className="text-xl font-bold text-center">Support</h2>
            <p>Call our awesome team.</p>
            <div className="pt-5">
              <button className="btn btn-sm bg-[#570df8]">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
