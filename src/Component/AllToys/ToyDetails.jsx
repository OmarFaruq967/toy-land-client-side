import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";

const ToyDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://toy-land-server-drab.vercel.app/toy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log("Current data:", data);

  return (
    <div>
      <Banner
        img={data.image}
        title={data.toyName}
        subtitle=" Product Details"
      />
      <div className="my-14 mx-5 md:mx-20 ">
       
        {/* //Toy card */}

        <div class="md:flex bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
          <div class="md:relative md:flex-none w-full  md:w-96">
            <img
              src={data.image}
              alt="shopping image"
              class="md:absolute inset-0 object-cover w-full h-full rounded-lg"
            />
          </div>
          <form class="flex-auto p-6 pl-10">
            <div class="flex flex-wrap">
              <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">
              {data.toyName}
              </h1>
              <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">
                ${data.price}
              </div>
              <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                In stock: {data.availableQuantity}
              </div>
              <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
              Seller: {data.sellerName}
              </div>
              <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
              Seller: {data.email}
              </div>
              <div className="flex ">
              <div>
                <p className="text-sm font-medium  text-gray-500 dark:text-gray-300 pr-5 pt-[6px]">Rating:</p>
              </div>
              <div class="flex items-center mt-2.5 mb-5">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {data.rating}
                </span>
              </div>
            </div>
            <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
            Description: <span className="text-sm font-normal">{data.detailDescription}</span> 
              </div>
            </div>
            <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
            
            </div>
            <div class="flex mb-4 text-sm font-medium">
              <button
                type="button"
                class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Buy now
              </button>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-300">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
