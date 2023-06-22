import React, { useState } from 'react';





const MyToysRow = ({ myToy, serialNumber, handleDelete }) => {
  const {
    toyName,
    sellerName,
    price,
    availableQuantity,
    detailDescription,
    toyURL,
    email
  } = myToy;


  // const handleDelete = (id) => {
  //   console.log('delete', id);
  //   fetch(`http://localhost:5000/remove/${id}`, {
  //     method: 'DELETE',
  //     headers:{"Content-type" : "application/json"}
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     if (data.deletedCount > 0) {
  //       console.log('Toy deleted successfully');
  //       // const remaining = myToys.filter(toy => toy._id !== _id);
  //       // setMyToys(remaining);
  //     }
  //   });
  // }
  // const [control , setControl] = useState(false)
  // const handleDelete = (id) => {
  //   console.log(id);
  //   fetch(`http://localhost:5000/remove/${id}`, {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       if (result?.deletedCount > 0) {
  //         setControl(!control);
  //       }
  //     });
  // };

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">{serialNumber}</td>
        <td className="px-6 py-4"> <img
            className="w-10 h-10 rounded-full"
            src={toyURL}
            alt="Jese image"
          /></td>
          <td className="w-4 p-4"><div className="text-base font-semibold">{toyName}</div></td>
         
        <th
          scope="row"
          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="pl-3">
            <div className="text-base font-semibold">{sellerName}</div>
            <div className="font-normal text-gray-500">{email}</div>
          </div>
        </th>
         
        {/* <th
          scope="row"
          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <img
            className="w-10 h-10 rounded-full"
            src={toyURL}
            alt="Jese image"
          />
          <div className="pl-3">
            <div className="text-base font-semibold">{toyName}</div>
            <div className="font-normal text-gray-500">{email}</div>
          </div>
        </th> */}
        <td className="px-6 py-4">{price}</td>
        
        <td className="px-6 py-4">
          <div className="flex items-center">
            {availableQuantity}
          </div>
        </td>
        
        <td className="px-6 py-4 ">
          <div className="flex items-center">
            {detailDescription}
          </div>
        </td>
        <td className="px-6 py-4">
          {/* <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-5"
          >
            Update
          </a> */}
          <button className="btn btn-xs mr-2 bg-[#5850ec]">Update</button>
          {/* <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Delete
          </a> */}
          <button onClick={() => handleDelete(myToy?._id)} className="btn btn-xs bg-[#5850ec]">Delete</button>
        </td>
      </tr>
    </>
  );
};

export default MyToysRow;
