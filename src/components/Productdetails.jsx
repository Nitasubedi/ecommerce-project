import { useParams } from "react-router-dom";
import productData from "../Productdata";

function ProductDetails() {
  const { id } = useParams();
  const product = productData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover mb-4"
        />
        <p>{product.description}</p>
        <p className="text-lg font-semibold mt-4">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
