import React, { useState } from 'react';
import { FaPenSquare, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MyToysRow = ({ myToy,  serialNumber, handleDelete }) => {
  const {
    toyName,
    sellerName,
    price,
    availableQuantity,
    detailDescription,
    image,
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
        <td className=" px-6 py-4"> <img
            className="w-10 h-10 rounded-full"
            src={image}
            alt="Jese image"
          /></td>
          <td className="px-6"><div className="text-base font-semibold">{toyName}</div></td>
         
        <th
          scope="row"
          className=" px-6 "
        >
          <div className="items-center">
            <div className="text-base font-semibold">{sellerName}</div>
            <div className="font-normal text-gray-500">{email}</div>
          </div>
        </th>
         
        <td className="py-4 px-6">{price}</td>
        
        <td className="py-4 px-6">
          <div className="flex items-center">
            {availableQuantity}
          </div>
        </td>
        
        <td className="py-4 w-[300px] pr-8 px-6 ">
          <div className="flex items-center text-justify">
            {detailDescription}
          </div>
        </td>
        <td className=" py-4 ">
          {/* <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-5"
          >
            Update
          </a> */}
          <Link to={`/toys/${myToy?._id}`}>
          <button className="btn btn-sm mr-2 bg-[#5850ec]"><FaPenSquare/></button>
          </Link>
          
          <button onClick={() => handleDelete(myToy?._id)} className="btn btn-sm bg-[#5850ec]"><FaRegTrashAlt/></button>
        </td>
      </tr>
    </>
  );
};

export default MyToysRow;
