import React from "react";

const Review = () => {
  return (
    <div>
      <div className="flex mx-0 justify-center">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row mx-0 ">
            <img
              src="https://i.ibb.co/bLYD0Wm/Reviews.jpg"
              className=" w-[350px] rounded-lg shadow-2xl h-[450px] lg:mr-14 mb-20"
            />
            {/* Carousal */}
           
            <div> 
            <div className="mb-10">
                <h2 className="font-bold text-2xl">Our Client testimonial</h2>
            </div>
              <div className="carousel ">
                <div id="slide1" className="carousel-item relative w-full">
                  <div className=" px-32">
                    <p>
                      {" "}
                      I was surprised at how attentive your sales managers are
                      to each little customer and how parents can relax and have
                      fun shopping. Great job on product selection and customer
                      support!{" "}
                    </p>
                    <p>
                      Also, the online service is just as good as at the actual
                      store, and therefore, I will recommend you to all my
                      friends.
                    </p>
                    {/* Avatar */}
                    <div className="avatar pt-10">
                      <div className="w-24 rounded-full">
                        <img src="https://i.ibb.co/QFWpxNZ/P3-OLGJ1-copy-1.png" />
                      </div>
                    </div>
                    <h2 className="font-semibold text-lg pt-2">Mr. Jabbar</h2>
                  </div>

                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                  
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <div className="full px-32">
                    <p>
                      {" "}
                      I was surprised at how attentive your sales managers are
                      to each little customer and how parents can relax and have
                      fun shopping. Great job on product selection and customer
                      support!{" "}
                    </p>
                    <p>
                      Also, the online service is just as good as at the actual
                      store, and therefore, I will recommend you to all my
                      friends.
                    </p>
                    {/* Avatar */}
                    <div className="avatar pt-10">
                      <div className="w-24 rounded-full">
                        <img src="https://i.ibb.co/QFWpxNZ/P3-OLGJ1-copy-1.png" />
                      </div>
                    </div>
                    <h2 className="font-semibold text-lg pt-2">Mr. Jabbar</h2>
                  </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
               
               
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
