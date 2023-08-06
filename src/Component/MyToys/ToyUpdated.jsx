import React from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../Shared/Container/Container";
import { toast } from "react-hot-toast";

const ToyUpdated = () => {
  const updatedToy = useLoaderData();
  console.log(updatedToy);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const updateToy = { name, price, quantity, details };
    console.log(name, price, quantity, details);

    fetch(`https://toy-land-server-drab.vercel.app/toys/${updatedToy?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Check if the server response indicates a successful update
        if (data && data.modifiedCount===1) {
          toast.success("Toy updated successful");
        }
      });
  };
  return (
    <div>
      <Container>
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Update your toy details: {updatedToy.toyName}
          </h2>

          <form onSubmit={handleUpdate}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="name"
                >
                  Toy name
                </label>
                <input
                  id="name"
                  type="text"
                  defaultValue={updatedToy.toyName}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  id="price"
                  type="number"
                  defaultValue={updatedToy.price}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="quantity"
                >
                  Quantity
                </label>
                <input
                  id="quantity"
                  type="number"
                  defaultValue={updatedToy.availableQuantity}
                  className="block w-full px-4 py-5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="details"
                >
                  Details
                </label>
                <textarea
                  id="details"
                  type="text"
                  rows=""
                  defaultValue={updatedToy.detailDescription}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Update
              </button>
            </div>
          </form>
        </section>
      </Container>
    </div>
  );
};

export default ToyUpdated;
