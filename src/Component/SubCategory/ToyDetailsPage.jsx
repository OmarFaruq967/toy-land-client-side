import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ToyDetailsPage = () => {
  const { id, toyId } = useParams(); // Extract the id and toyId from URL parameters

  const [data, setData] = useState(null); // Initialize data with null

  useEffect(() => {
    fetch(`https://toy-land-server-drab.vercel.app/categories/${id}?toyId=${toyId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [id, toyId]);

  console.log("Current data:", data);

  return (
    <div>
      {data ? ( // Check if data is not null
        <div className="my-14 mx-20 ">
          <h2 className="text-center text-2xl font-semibold py-10">
            Product Details of:{" "}
            <span className="text-[#5850ec] font-bold"> {data.name}</span>{" "}
          </h2>

          <div className="card lg:card-side bg-base-100 shadow-xl px-10 py-10">
            <figure>
              <img  src={data.picture} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-semibold">Name: {data.name}</h2>
              <p className="font-medium">Price: {data.price}</p>
              <div className="flex ">
                <div>
                  <p className="font-medium pr-5 pt-[6px]">Rating:</p>
                </div>
                <div className="flex items-center mt-2.5 mb-5">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Second star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Third star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fourth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    {data.rating}
                  </span>
                </div>
              </div>

              <p className="font-medium">Description: {data.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy now</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default ToyDetailsPage;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ToyDetailsPage = () => {
//   const { id, toyId } = useParams(); // Extract the id and toyId from URL parameters

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:5000/categories/${id}?toyId=${toyId}`)
//       .then((res) => res.json())
//       .then((data) => setData(data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div>

//       <h2>details</h2>
//       {/* Render the toy details */}
//     </div>
//   );
// };

// export default ToyDetailsPage;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ToyDetailsPage = () => {
//   const { id, toyId } = useParams(); // Extract the id and toyId from URL parameters

//   const [data, setData] = useState([]);
//   const [toy, setToy] = useState(null); // Add a state for the selected toy

//   useEffect(() => {
//     fetch(`http://localhost:5000/categories/${id}?toyId=${toyId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setData(data);
//           const selectedToy = data.find((item) => item.toyId === toyId);
//           setToy(selectedToy);
//         } else {
//           console.log('Data is not an array:', data);
//         }
//       })
//       .catch((error) => console.log(error));
//   }, [id, toyId]);

//   return (
//     <div>
//       {toy && (
//         <div>
//           <h2>Details</h2>
//           {/* Render additional toy details */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ToyDetailsPage;
