import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ allToy, serialNumber }) => {
    const {
      toyName,
      sellerName,
      price,
      subCategories,
      availableQuantity,
      detailDescription,
      toyURL,
      email
    } = allToy;
  
    return (
      <>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="w-4 p-4">{serialNumber}</td>
          <td className="px-6 py-4"> <img
              className="w-10 h-10 rounded-full"
              src={toyURL}
              alt="Jese image"
            /></td>
            <th
            scope="row"
            className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
          >
            <div className="pl-3">
              <div className="text-base font-semibold">{sellerName}</div>
              <div className="font-normal text-gray-500">{email}</div>
            </div>
          </th>
            <td className="w-4 p-4"><div className="text-base font-semibold">{toyName}</div></td>
           
          
           
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
          <td className="px-6 py-4">{subCategories}</td>
          
          <td className="px-6 py-4">
            <div className="flex items-center">
              {price}
            </div>
          </td>
          
          <td className="px-6 py-4 ">
            <div className="flex items-center">
              {availableQuantity}
            </div>
          </td>
          <td className="px-6 py-4">

          <Link to={`/toy/${allToy._id}`}>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      View Details
                    </button>
                  </Link>
            
          </td>
        </tr>
      </>
    );
  };

export default AllToysRow;