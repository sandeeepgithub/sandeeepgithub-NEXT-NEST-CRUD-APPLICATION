import React, { useState, useEffect } from "react";

const ProductForm = ({ data, setEdit, editHandler, addHandler }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    images: "",
    type: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("price", formData.price);
    form.append("quantity", formData.quantity);
    form.append("file", formData.images);
    form.append("type", formData.type);
    form.append("location", formData.location);

    if (data?.name) {
      form.append("id", data?.id);
      editHandler(form);
      setEdit(null);
      setFormData({
        name: "",
        price: "",
        quantity: "",
        images: "",
        type: "",
        location: "",
      });
    } else {
      addHandler(form);
      setFormData({
        name: "",
        price: "",
        quantity: "",
        images: "",
        type: "",
        location: "",
      });
    }
  };

  useEffect(() => {
    if (data && data?.name) {
      setFormData({
        id: data.id,
        name: data?.name,
        price: data?.price,
        quantity: data?.quantity,
        images: data?.images,
        type: data?.type,
        location: data?.location,
      });
    }
  }, [data]);

  return (
    <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-4">
        {/* First Row */}
        <div className="col-span-1 mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="col-span-1 mb-5">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter price"
            required
          />
        </div>
        <div className="col-span-1 mb-5">
          <label
            htmlFor="quantity"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter quantity"
            required
          />
        </div>

        {/* Second Row */}
        <div className="col-span-1 mb-5">
          <label
            htmlFor="images"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Images
          </label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={(e) =>
              setFormData({
                ...formData,
                images: e.target.files[0],
              })
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="col-span-1 mb-5">
          <label
            htmlFor="type"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter product type"
            required
          />
        </div>
        <div className="col-span-1 mb-5">
          <label
            htmlFor="location"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter location"
            required
          />
        </div>
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {data?.name ? "Edit Product" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;
