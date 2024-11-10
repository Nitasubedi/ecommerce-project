/* eslint-disable react/prop-types */

import { FaEdit, FaTrash } from "react-icons/fa"; 

function ProductCard({ product, onUpdate, onDelete }) {
  if (!product) return null;

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300 hover:transition-transform">
      <div className="flex justify-end space-x-1">
        <button
          onClick={() => onUpdate(product)}
          className="text-blue-400 hover:text-blue-600"
          aria-label="Update Product"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="text-red-400 hover:text-red-500"
          aria-label="Delete Product"
        >
          <FaTrash />
        </button>
      </div>
      <div className="w-full h-48 flex items-center justify-center rounded-lg overflow-hidden ">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain h-full"
        />
      </div>

      <div className="text-sm font-normal mt-2">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>

      <p className="text-red-400 font-medium text-base mt-2">
        Rs. {product.price}
      </p>

    </div>
  );
}

export default ProductCard;
