import Image from "next/image";
import React from "react";

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <table className="max-w-xxl mx-auto bg-white border border-gray-300 mt-10">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b text-black">Product Name</th>
          <th className="py-2 px-4 border-b text-black">Price</th>
          <th className="py-2 px-4 border-b text-black">Quantity</th>
          <th className="py-2 px-4 border-b text-black">Images URL</th>
          <th className="py-2 px-4 border-b text-black">Product Type</th>
          <th className="py-2 px-4 border-b text-black">Location</th>
          <th className="py-2 px-4 border-b text-black">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr
            key={index}
            className={
              (index % 2 === 0 ? "bg-gray-50" : "bg-white") + " border-b"
            }
          >
            <td className="py-2 px-4 align-middle text-black">
              {product.name}
            </td>
            <td className="py-2 px-4 align-middle text-black">
              {product.price}
            </td>
            <td className="py-2 px-4 align-middle text-black">
              {product.quantity}
            </td>
            <td className="py-2 px-4 align-middle text-black">
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.images}`}
                alt={product.images}
                width={200}
                height={100}
              />
            </td>
            <td className="py-2 px-4 align-middle text-black">
              {product.type}
            </td>
            <td className="py-2 px-4 align-middle text-black">
              {product.location}
            </td>
            <td className="py-2 px-4 align-middle text-black">
              <button
                className="text-blue-500 hover:text-blue-700 focus:outline-none focus:text-blue-700"
                onClick={() => onEdit(product)}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:text-red-700 focus:outline-none focus:text-red-700 ml-2"
                onClick={() => onDelete(product.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
